const express = require("express")

const PORT = 3000
const app = express();
app.use(express.static("public"))

import {Database} from "bun:sqlite";

const squema = await Bun.file("./movies.sql").text()
console.log(squema)

const db = new Database("movies.db")

db.run(squema)

const select = db.query("SELECT * FROM movies")

const movies = select.all()


app.get("/movies", (req,res)=>{
    res.json(movies)

})

app.listen(PORT, () => console.log("MAETLO CHEN"))
