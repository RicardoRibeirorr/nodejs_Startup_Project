module.exports = (database, dataTypes) => {
    return Post = database.define("posts", {
      id: { type: dataTypes.INTEGER, autoIncrement: true, primaryKey: true},
      userId: { type: dataTypes.INTEGER},
      title: { type: dataTypes.STRING(45) },
      content: { type: dataTypes.TEXT("long") },
    });
  };