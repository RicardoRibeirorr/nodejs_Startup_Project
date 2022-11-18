const models = require("../../bootstrap/extends/models_db.extends")


//####################### Models #######################
models.user = require("../models/user.model.js")(models);





module.exports = models;