const crypto = require("crypto");
const requestBodyparser = require("../util/body-parser");
const writeToFile = require("../util/write-to-file");

module.exports = async (req, res) => {
    if (req.url === "/api/movies") {
        try {
            let body = requestBodyparser(req);
            body.id = crypto.randomUUID();
            req.movies.push(body);
            res.writeToFile(req.movies);
            res.writeHead(201, {"Content-Type": "application/json"});
        } catch (err) {
            console.log(err);
            res.writeHead(400, {"Content-type": "application/json"});
            res.end(JSON.stringify({ title: "Validation failed", message: "Request body is not valid"}));
        }
    } else {
        res.writeHead(404, {"Content-type": "application/json"});
        res.end(JSON.stringify({ title: "Not Found", message: "Route not found"}));
    }
};