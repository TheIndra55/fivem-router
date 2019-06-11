const UrlPattern = require("url-pattern");
const Response = require("./response.js")

module.exports = class Router {
    /**
     * Constructs a new router
     */
    constructor() {
        this.routes = []

        global.SetHttpHandler((req, response) => {
            const res = new Response(response)

            for (var i in this.routes) {
                const route = this.routes[i]
                const pattern = new UrlPattern(route.url)

                const match = pattern.match(req.path)

                if (match && req.method == route.method) {
                    req.params = match
                    route.callback(req, res)

                    return
                }
            }

            // if any other methods handle this return method not allowed
            if (this.routes.filter(route => new UrlPattern(route.url).match(req.path)).length) {
                res.send("Method Not Allowed", 405)
            } else {
                // else return 404
                res.send("Not found", 404)
            }
        })
    }

    get(url, callback) {
        this.method("GET", url, callback)
    }

    post(url, callback) {
        this.method("POST", url, callback)
    }

    put(url, callback) {
        this.method("PUT", url, callback)
    }

    patch(url, callback) {
        this.method("PATCH", url, callback)
    }

    delete(url, callback) {
        this.method("DELETE", url, callback)
    }

    /**
     * Routes a provided method by url to specified callback
     * 
     * @param {String} method 
     * @param {String} url 
     * @param {Function} callback 
     */
    method(method, url, callback) {
        this.routes.push({
            method: method,
            url: url,
            callback: callback
        })
    }
}
