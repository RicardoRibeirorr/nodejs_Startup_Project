const config = require("../db.config");

const Sequelize = require("sequelize");
const database = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    port: config.PORT,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);
const migrations = {...require("../../app/database/migrations/index")({database,Sequelize})}
const db = {
  Sequelize : Sequelize,
  database : database,
  ...migrations
}


module.exports = db;