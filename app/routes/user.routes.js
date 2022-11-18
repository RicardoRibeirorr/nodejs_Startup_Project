const { auth } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/user",
    [auth.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/test/mod",
    [auth.verifyToken, auth.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [auth.verifyToken, auth.isAdmin],
    controller.adminBoard
  );
};