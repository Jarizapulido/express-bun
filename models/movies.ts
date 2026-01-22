import {Database} from "bun:sqlite"

export function getMovies(db: Database, filters: {title: string | undefined, genres: string | undefined}){

    const {title,genres} = filters;
    let movies
    if(title && genres) movies = getMoviesByTitleAndGenre(db, title, genres)
    else if(genres) movies = getMoviesByGenre(db,genres)
    else if(title) movies = getMoviesByTitle(db,title)
    else movies = getAllMovies(db)
    return movies;
}

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

export function getMoviesByGenre(db: Database, genero: string) {
    const query = db.query("SELECT * FROM movies WHERE genre LIKE ?")
    return query.all(`%${genero}%`)
}

export function getMoviesByTitleAndGenre(db: Database,titulo: string,genero: string) { 
    const query = db.query("SELECT * FROM movies WHERE nombre LIKE ? AND genre LIKE ?")
    return query.all(`%${titulo}%`, `%${genero}%`)
}