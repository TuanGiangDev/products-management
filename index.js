const express = require("express");

const routes = require("./routes/index.route");
const app = express();
const port = 8080;

app.set("views", "./views");
app.set("view engine", "pug");

//Routes
routes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});