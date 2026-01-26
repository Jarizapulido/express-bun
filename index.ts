import { initDB } from "./db/init";
import { getMovies, insertMovie} from "./models/movies";
import express from "express"
import type {Request, Response, NextFunction} from "express"

const app = express();
const PORT = 3000;
const db = await initDB()
app.use(express.json())
const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    //codigo
    console.log(req.method, req.url, new Date().toISOString())

    if(req.method === "GET"){
        console.log(req.query)
    }
    if(req.method === "POST"){
        console.log(req.body)
    }
    next()
}

app.use(express.static("public"))
app.use(logMiddleware)

app.get("/movies", (req,res) => {
    const {title, genres} = req.query
    const filters = {
        title: typeof title === "string" ? title : undefined, 
        genres: typeof genres === "string" ? genres : undefined
    }
    const movies = getMovies(db, filters)
    res.json(movies)
})

app.post("/movies", (req, res) => {
    //TODO Validar datos de entrada, si no llegan title y genre revienta
    //TODO Usar un try/catch en caso de que la db falle
    const {nombre, genre} = req.body
    const respuesta = insertMovie(db, nombre, genre)
    res.send(respuesta)
})

app.listen(PORT, () =>{
    console.log(`Servidor funcionando en puerto ${PORT}`)
})

//const peliculas = getAllMovies(db)
//console.log(peliculas)
//const pelicula = getMoviesById(db, 1234)
///console.log(pelicula)


