const dotenv = require('dotenv');
    dotenv.config();
    
module.exports = {
    secret: process.env.APP_KEY
  };