const dotenv = require('dotenv');
const cors = require("cors");
const express = require("express");

class Server extends express {
    constructor() {
        const app = express();
        app.use(cors({
            origin: process.env.CORS
        }));
        app.use(express.json());
        app.use(express.urlencoded({
            extended: process.env.URLENCODED
        }));
    }

    listen() {
        const PORT = process.env.PORT || 8080;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}. Check link: http://localhost:${PORT}/`);
        });
    }
}