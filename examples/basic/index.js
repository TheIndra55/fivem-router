const Router = require("fivem-router")

var router = new Router()

router.get("/", function (request, response) {
    response.send("Hello World!")
})

router.get("/planet/:planet", function (request, response) {
    const planet = request.params.planet

    if (planet == "earth") {
        response.send("You are from a cool planet")
        return
    }

    response.send("You are from " + planet)
})
