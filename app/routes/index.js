
module.exports = function(app) {
  //Headers - Most cases you don't need to change this
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  //Just a simple route
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to my new application." });
  });
  

  //Specific model routes
  require('./auth.routes')(app); //Authentification Route
  require('./user.routes')(app); //User Route
}