module.exports = function(sequelize, Sequelize) {
    var Burger = sequelize.define("Burger", {
        burger_name: Sequelize.STRING,
        devour: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0,
        },
    });
    return Burger;
};

// var Sequelize = require("sequelize");


// var Burger = sequelize.define("burgers", {
//     burger_name: Sequelize.STRING,
//     devour: {
//         type: Sequelize.BOOLEAN,
//         defaultValue: 0,
//     }
// });

// Burger.sync();

// module.exports = Burger;