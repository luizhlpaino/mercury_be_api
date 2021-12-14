const express = require("express");
const routes = require("./routes");

const app = express();
const port = 3000;

routes.forEach((route) => app[route.method](route.path, route.handler));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log(`${JSON.stringify(routes)}`);
});

module.exports = app;