module.exports = (models) => {
        models.role.create({
          id: 1,
          name: "user"
        });
       
        models.role.create({
          id: 2,
          name: "moderator"
        });
       
        models.role.create({
          id: 3,
          name: "admin"
        });
}