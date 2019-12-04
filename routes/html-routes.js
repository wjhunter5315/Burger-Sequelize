var path = require("path");
var exphbs  = require("../server.js");
module.exports = function(htmlRoute) {

    htmlRoute.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views"));
    });
}