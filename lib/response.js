module.exports = class Response {
    constructor(res) {
        this.res = res
    }

    json(json, code = 200) {
        this.res.writeHead(code, { "Content-Type": "application/json" })
        this.res.send(JSON.stringify(json))
    }

    send(response, code = 200) {
        this.res.writeHead(code)
        this.res.send(response)
    }
}
