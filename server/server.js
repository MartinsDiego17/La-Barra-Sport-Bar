const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const { conn } = require("./db");
const routes = require("./routes/routes");
const cors = require("cors");

const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use(cors());

app.use("/", routes);

conn.sync({ alter: true }).then(() => {
    app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
    });
});