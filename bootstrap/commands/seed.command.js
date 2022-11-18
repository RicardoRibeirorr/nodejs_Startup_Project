console.warn("This operation will clear all your table and insert seed values.")
console.log("Stablishing connection with database...")

const models = require("../../app/models");
models.database.sync({force: true}).then(() => {
    console.log('Database connection granted');
    require("../../app/database/seeders/index")(models);
    console.info('Database Seeded');
}).catch((e)=>{
    console.error(e)
    console.error("Error while seeding. \n This may indicate that your connection is down. Verify if you filled the host and port correctly on your env file. \n Note: If you're using phpMyAdmin or others similar, your host & post are usually not the ones on the url.")
})