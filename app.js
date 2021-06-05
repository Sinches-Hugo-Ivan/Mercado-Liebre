const express = require("express");
const path = require("path");

const views = path.resolve(__dirname,"views");

const app = express();

app.use(express.static("public"));


app.get("/",(req,res) => res.sendFile(path.resolve(views,"home.html")));


app.listen(3030,() => console.log("server on port 3030"));