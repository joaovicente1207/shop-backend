const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const routes = require("./src/routes");
const startDB = require("./db.js")

startDB();

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})