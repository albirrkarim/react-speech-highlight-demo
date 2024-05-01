# How to build this package with open ai api integration

This package is integrate with open ai API completions API (optional) to solve [issue](PROBLEMS.md#6-wrong-read-number).

So we must have backend server that provide proxy api call to the open ai.

![Open AI API](/img/chat_gpt_api.png)

## 1. Set open ai chat completion api endpoint

Goto [API Docs about this](API.md#package-data-and-cache-integration) 

## 2. Make Backend for open ai chat completion API

### API URL Endpoint

```js
OPENAI_CHAT_COMPLETION_API_ENDPOINT = "https://example.com/api/v1/public/chat";
```

with that url then the package will send request like this

```json
{
  "messages": [
    {
      "role": "user",
      "content": "convert this semicolon separated number \"1000;4090;1000000;1,2;9001;30,1\" into word form number with language \"en-US\" return the result as array. don't explain"
    }
  ]
}
```

and your backend will respose like this.

### Example response that this package want

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

### Example Implementation

If you are using different backend, please look by yourself how to implement it. the important is the same respond (like [this](#example-response-that-this-package-want)) so the `react-speech-highlight` package can understand.

Actually you can customize the logic, like add authentication method.

<details>
  <summary>Show example using Laravel as Backend</summary>

<br/>

### Router

Open `routes/api.php`

Remember you must set the throttle 180 request / 1 minute. our engine need to send a lot request. no worry it small request. that cost effective.

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
        $bodyData = $request->all();

        if (!isset($bodyData['messages'])) {
            return response()->json([
                "status" => false,
                "message" => "please post 'messages' as body request"
            ], 400);
        }

        // This package is have problem don't use it -> https://github.com/openai-php/laravel
        // https://github.com/openai-php/laravel/issues/51#issuecomment-1651224516

        // Use approach like this instead
        $result = Http::withToken($api_key)
            ->retry(5, 500)
            ->post(
                'https://api.openai.com/v1/chat/completions',
                [
                    'model' => 'gpt-3.5-turbo',
                    'messages' => $bodyData["messages"],
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
                ]
            )
            ->throw()
            ->json();

        return $result;
    }
}
```

</details>


## 3. Build

run 

```bash
npm run build
```