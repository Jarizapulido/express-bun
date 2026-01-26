import { initDB } from "./db/init";
import { Database } from "bun:sqlite";

import { getMoviesByGenre, getMoviesByTitleAndGenre, insertMovie, getAllMovies} from "./models/movies";

const db: Database = await initDB();
insertMovie(db, "esto es una prueba", "Drama|comedia")
const movies = getAllMovies(db)
console.log(movies)