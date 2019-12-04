var path = require("path");
var exphbs  = require('express-handlebars');
module.exports = function(htmlRoute) {

    htmlRoute.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../views"));
    });
}