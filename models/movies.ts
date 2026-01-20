import {Database} from "bun:sqlite"

export function getAllMovies(db:Database){
    const query=db.query("SELECT * FROM movies")
    return query.all()
}

export function getMoviesById(db:Database, id: number){
    const query=db.query("SELECT * FROM movies WHERE id = ?")
    return query.get(id)
}

export function getMoviesByTitle(db:Database, nombre: string){
    const query=db.query("SELECT * FROM movies WHERE nombre like ? ")
    return query.all(`%${nombre}%`)
}