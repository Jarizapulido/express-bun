import {Database} from "bun:sqlite"
import { getAllMovies } from "../models/movies"

export async function initDB(){
    const db = new Database("./db/movies.db")
    const schema:string = await Bun.file("./db/movies.sql").text()
    db.run(schema)
    const movies = getAllMovies(db)
    if(movies.length==0){
        const dump:string= await Bun.file("./db/dump.sql").text()
        db.run(dump)
    }
    return db
}


