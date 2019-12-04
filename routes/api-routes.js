var db = require("../models");

module.exports = function(app) {
    
    app.get("/api/burgers", function(req, res) {
        db.Burger.findAll({}).then(function(dbBurger) {
            return res.json(dbBurger);
        });
    });

    app.post("/api/burgers", function(req, res) {
        db.Burger.create({
          name: req.body.name,
          devour: req.body.devour,
        }).then(function(result) {
          return res.json(result);
        });
    });

    app.delete("/api/burgers/:id", function(req, res) {
        db.Burger.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(result) {
          res.json(result);
        });
    });

    app.put("/api/burgers", function(req, res) {
        db.Burger.update({
            name: req.body.name,
            devour: req.body.devour,
        }, {
          where: {
            id: req.body.id
          }
        }).then(function(result) {
          return res.json(result);
        })
    });
}