const { DataTypes } = require("sequelize");

module.exports = (database, dataTypes) => {
    return User = database.define("users", {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
      username: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING }
    });
  };