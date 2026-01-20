import { initDB } from "./db/init";
import { getAllMovies, getMoviesById, getMoviesByTitle} from "./models/movies";
import express from "express"

const app = express();
const PORT = 3000;
const db = await initDB()

app.get("/movies", (req,res) => {
    const peliculas = getAllMovies(db)
    res.json(peliculas)
})

app.listen(PORT, () =>{
    console.log(`Servidor funcionando en puerto ${PORT}`)
})

//const peliculas = getAllMovies(db)
//console.log(peliculas)
//const pelicula = getMoviesById(db, 1234)
///console.log(pelicula)
const pelicula = getMoviesByTitle(db, "")
console.log(pelicula)

