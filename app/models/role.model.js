
module.exports = (models) => {
  //Define fast user roles (avoid db request)
  models.role.ROLES = ["user", "admin", "moderator"];


  //Define user relationships
  models.role.belongsToMany(models.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
  });

  return models.role;
}