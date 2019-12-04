var path = require("../models/index.js");
// var exphbs  = require("../server.js");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index");
    });
}