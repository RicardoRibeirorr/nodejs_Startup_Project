module.exports = (models) => {
        require('./users.seeder')(models);
        require('./posts.seeder')(models);
}