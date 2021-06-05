const express = require("express");
const path = require("path");

const views = path.resolve(__dirname,"views");

const app = express();

app.use(express.static("public"));


app.get("/",(req,res) => res.sendFile(path.resolve(views,"home.html")));
app.get("/index",(req,res) => res.sendFile(path.resolve(views,"index.html")));
app.get("/Heroes",(req,res) => res.sendFile(path.resolve(views,"Heroes.html")));
app.get("/Demonios",(req,res) => res.sendFile(path.resolve(views,"Demonios.html")));
app.get("/Otros",(req,res) => res.sendFile(path.resolve(views,"Otros.html")));
app.get("/Pelicula",(req,res) => res.sendFile(path.resolve(views,"Pelicula.html")));
 


app.listen(3030,() => console.log("server on port 3030"));