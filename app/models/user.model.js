  module.exports = (model) => {
    //Define user relationships
    // model.user.belongsToMany(model.role, {
    //   through: "user_roles",
    //   foreignKey: "userId",
    //   otherKey: "roleId"
    // });
  
    return model.user;
  }
  