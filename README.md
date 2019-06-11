# fivem-router

A simple FiveM router using SetHttpHandler native and url-pattern lib

# Features

- Simple and small
- Uses intergrated FX http handler (no extra ports)
- Almost no dependencies

# Usage

```js
const Router = require("fivem-router")

var router = new Router()

router.get("/", function(request, response){
    response.send("Hello World!");
});

router.get("/pages/:page", function(request, response){
    const page = request.params.page;

    response.send("You are looking for " + page)
});
```
