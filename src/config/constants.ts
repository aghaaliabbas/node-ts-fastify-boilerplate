const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
    path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`),
});


export const CONFIG = {
    port: process.env.PORT,
    env: 'dev'
}