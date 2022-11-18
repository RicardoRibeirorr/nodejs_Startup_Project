module.exports = (database, dataTypes) => {
    return User = database.define("users", {
      id: { type: dataTypes.INTEGER, autoIncrement: true, primaryKey: true},
      username: { type: dataTypes.STRING },
      email: { type: dataTypes.STRING },
      password: { type: dataTypes.STRING }
    });
  };