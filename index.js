const express = require("express");
const routes = require("./routes/client/index.route");

const database = require("./configs/database");

require("dotenv").config();

database.connect();

const app = express();
const port = process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static('public'));

//Routes
routes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});