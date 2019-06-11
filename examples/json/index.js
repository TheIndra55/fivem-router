const Router = require("fivem-router")

var router = new Router()

router.get("/json", function (request, response) {
    response.json({ json: true, snail: "🐌" })
})
