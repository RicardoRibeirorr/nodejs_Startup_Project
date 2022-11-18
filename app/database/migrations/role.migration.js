
module.exports = (database, dataTypes) => {
    return Role = database.define("roles", {
      id: { type: dataTypes.INTEGER, primaryKey: true },
      name: { type: dataTypes.STRING }
    });
  };
