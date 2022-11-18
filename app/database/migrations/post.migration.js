const { DataTypes } = require("sequelize");

module.exports = (database, dataTypes) => {
    return Post = database.define("posts", {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
      userId: { type: DataTypes.INTEGER},
      title: { type: DataTypes.STRING(45) },
      content: { type: DataTypes.TEXT("long") },
    });
  };