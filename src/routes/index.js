const path = require("path");
const fs = require("fs");

const routes = []
const absolutePath = path.resolve("./src/routes/");
const routeFolders = fs.readdirSync(absolutePath)
    .filter((filename) => !filename.includes("index.js"));

routeFolders.forEach((routeFolder) => routes.push(...require(`./${routeFolder}`)));

module.exports = routes;