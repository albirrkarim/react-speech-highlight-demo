# Optional

This package is integrate with open ai API completions API (optional).

So we must have backend server that provide bridge api call to the open ai.

![Open AI API](/img/chat_gpt_api.png)

## 1. Set open ai chat completion api endpoint

```bash
 cp .env.example .env
```

Inside `.env` set the `OPENAI_CHAT_COMPLETION_API_ENDPOINT` with your api

```bash
OPENAI_CHAT_COMPLETION_API_ENDPOINT="https://example.com/api/public/chat"
```

## 2. Make Backend for open ai chat completion API

### API URL Endpoint

```js
OPENAI_CHAT_COMPLETION_API_ENDPOINT = "https://example.com/api/public/chat";
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

<details>
  <summary>Show example using Laravel as Backend</summary>

<br/>

See open ai laravel package [github.com/openai-php/laravel](https://github.com/openai-php/laravel)

### Router

`routes/api.php`

```php
/* OpenAI */
Route::name("openai.")->controller(OpenAIController::class)->group(function () {
    // chat gpt
    Route::post('chat',  'chatPost')->name('chat_gpt_new');
});
```

Controller

`OpenAIController.php`

```php
use OpenAI\Laravel\Facades\OpenAI;
use OpenAI as OpenAIPHP;

class OpenAIController extends Controller
{
    public function chatPost(Request $request){
        $origin = $request->header('Origin');

        $allowed_domain = [
            "https://example.com" =>  "sk-xxx_your_secret_key",

            // GPT Web Guide
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

        // https://github.com/openai-php/laravel
        $result = OpenAIPHP::client($api_key)->chat()->create([
            'model' => 'gpt-3.5-turbo',
            'messages' => $bodyData["messages"]
        ]);

        return json_encode($result);
    }
}
```

</details>
