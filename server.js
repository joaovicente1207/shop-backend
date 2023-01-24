const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const routes = require("./src/routes");

const startDB = require("./db.js")

const PORT = process.env.PORT || 5000
const app = express();

startDB();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

const soma = (param1,param2) =>  {
    return param1+param2
}



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})