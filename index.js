const express = require("express");
const fs = require("fs");
const path = require("path");
const body_parser = require("body-parser");
const app = express();
const PORT = 3000;
global.database = path.join(__dirname, "./database/data.json");

const api_route = require("./routes/api");
const web_route = require("./routes/web");
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/styles", express.static("public/styles"));
app.use("/javascript", express.static("public/javascript"));

app.use("/api", api_route);
app.use("/", web_route);



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));