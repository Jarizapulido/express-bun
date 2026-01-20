import { initDB } from "./db/init";
import { getAllMovies } from "./models/movies";

const db = await initDB()
//const peliculas = getAllMovies(db)
//console.log(peliculas)