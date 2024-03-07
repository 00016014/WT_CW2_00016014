const express = require("express");
const fs = require("fs");
const path = require("path");
const body_parser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/styles", express.static("public/styles"));
app.use("/javascript", express.static("public/javascript"));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

global.database = path.join(__dirname, "./database/data.json");

app.get("/", (req, res) => {
    res.render("toDO_list.pug");
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));