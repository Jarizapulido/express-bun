import { initDB } from "./db/init";
import { getAllMovies, getMoviesById, getMoviesByTitle} from "./models/movies";

const db = await initDB()
//const peliculas = getAllMovies(db)
//console.log(peliculas)
//const pelicula = getMoviesById(db, 1234)
///console.log(pelicula)
const pelicula = getMoviesByTitle(db, "")
console.log(pelicula)

