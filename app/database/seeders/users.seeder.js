
var bcrypt = require("bcryptjs");
module.exports = (models) => {
    models.user.create({
        username: "user1",
        email: "user1@gmail.com",
        password: bcrypt.hashSync("mypassword", 8)
    });
    models.user.create({
        username: "user2",
        email: "user2@gmail.com",
        password: bcrypt.hashSync("mypassword", 8)
    });
    models.user.create({
        username: "user3",
        email: "user3@gmail.com",
        password: bcrypt.hashSync("mypassword", 8)
    });
}