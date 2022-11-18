module.exports = (models) => {
        require('./users.seeder')(models);
        require('./posts.seeder')(models);
        require('./roles.seeder')(models);
}