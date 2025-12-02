# How To Set Up Backend For This Package

## A. LLM (Large Language Model) API

Optionally, we need an LLM API to solve many [issues](PROBLEMS.md). The LLM API I use is the OpenAI chat completion API. So we must have a backend server that provides a proxy API call to OpenAI.

![Open AI API](/img/chat_gpt_api.png)

### 1. Make Backend for open ai chat completion API

**API URL Endpoint**

```js
OPENAI_CHAT_COMPLETION_API_ENDPOINT = "https://example.com/api/v1/public/chat";
```

With that URL, the `package` will send a **body request** like this

```json
{
  "temperature": 0,
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "user",
      "content": "convert this semicolon separated number \"1000;4090;1000000;1,2;9001;30,1\" into word form number with language \"en-US\" return the result as array. don't explain"
    }
  }
}
```

And your backend will **respond** like this.

#### Example response that this package wants

```json
{
  "id": "chatcmpl-7s8i7oHA1BkcLD5U0FFkoYEn2b2QF",
  "object": "chat.completion",
  "created": 1693137551,
  "model": "gpt-3.5-turbo-0613",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "[\"one thousand\", \"four thousand ninety\", \"one million\", \"one point two\", \"nine thousand one\", \"thirty point one\"]"
      },
      "finishReason": "stop"
    }
  ],
  "usage": { "promptTokens": 54, "completionTokens": 29, "totalTokens": 83 }
}
```

### 2. Set open ai chat completion api endpoint for the package

Goto [API Docs about this](API.md#package-data-and-cache-integration)

<br/>

### Example Implementation

If you are using a different backend, please look for yourself on how to implement it. The important thing is to have the same response (like [this](#example-response-that-this-package-wants)) so the `react-speech-highlight` package can understand it. Actually, you can customize the logic, like adding an [authentication header](API.md#set-custom-constant-value-for-this-package).

<details>
  <summary>Show example using Laravel as Backend</summary>

  <br/>

### Router

Open `routes/api.php`

Remember you must set the throttle 180 request / 1 minute. our engine need to send a lot request. no worry it small request so its cost effective.

```php
/* OpenAI */
Route::name("openai.")->middleware('throttle:180,1')->controller(OpenAIController::class)->group(function () {
    // chat gpt
    Route::post('chat',  'chatPost')->name('chat_completions');
});
```

Controller

Open `OpenAIController.php`

```php
class OpenAIController extends Controller
{
    public function chatPost(Request $request){
        $origin = $request->header('Origin');

        $allowed_domain = [
            // Production url
            "https://example.com" =>  "sk-xxx_your_secret_key",

            // Development url
            "http://localhost:3000" => "sk-xxx_your_secret_key",
        ];

        if (!isset($allowed_domain[$origin])) {
            return response()->json([
                "status" => false,
                "message" => "Invalid request, please contact support!"
            ], 400);
        } else {
            if (strpos($origin, 'localhost') !== false) {
                if (app()->environment() != "local") {
                    return response()->json([
                        "status" => false,
                        "message" => "Invalid request, please contact support!"
                    ], 400);
                }
            }
        }

        $api_key = $allowed_domain[$origin];
        $data = $request->all();

        if (!isset($data['messages'])) {
            return response()->json([
                "status" => false,
                "message" => "please post 'messages' as body request"
            ], 400);
        }

        // the [https://github.com/openai-php/laravel] package has problems don't use it
        // https://github.com/openai-php/laravel/issues/51#issuecomment-1651224516

        $body = [
            'model' => isset($data["model"]) ? $data["model"] : 'gpt-3.5-turbo',
            'messages' => $data["messages"],
            'temperature' => isset($data["temperature"]) ? $data["temperature"] : 0.6,

            // 'functions' => [
            //     [
            //         'name' => $function, 'parameters' => config('schema.'.$function),
            //     ],
            // ],
            // 'function_call' => [
            //     'name' => $function,
            // ],
            // 'temperature' => 0.6,
            // 'top_p' => 1,
        ];

        // Use approach like this instead
        $result = Http::withToken($api_key)
            ->retry(5, 500)
            ->post('https://api.openai.com/v1/chat/completions', $body)
            ->throw()
            ->json();

        return $result;
    }
}
```

</details>

<br/>

## B. Text To Speech API

When you decide to use audio source is from TTS API. you can see the [AUDIO_FILE.md](AUDIO_FILE.md) for more detail.
