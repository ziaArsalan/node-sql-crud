"use strict"

const Sequelize = require("sequelize")
const config    = require('../config')
var   fs        = require("fs");
var   path      = require("path");
var   basename  = path.basename(__filename);


let db = {}

var sequelize = new Sequelize(
    config.sql.database,
    config.sql.username,
    config.sql.password,
    { ...config.sql }
)

const model = require(path.join(__dirname, './schemas/User.js'))(sequelize, Sequelize.DataTypes)

db[model.name] = model


// fs.readdirSync(__dirname)
//   .filter((file) => {
//       console.log(basename);
//     return (
//       file.indexOf(".") !== 0 &&
//       file !== basename &&
//       file.slice(-3) === ".js" &&
//       file != "seeds"
//     );
//   })
//   .forEach((file) => {
//     var model = sequelize["import"](path.join(__dirname, file));
//     db[model.name] = model;
//   });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db