DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
id INTEGER PRIMARY KEY AUTOINCREMENT,
nombre TEXT NOT NULL,
genre TEXT NOT NULL,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO movies (nombre,genre ) VALUES 
("test","test"),
("The Matrix","Scifi,Action"),
("Cars","animation"),
("Nemo","animation")
;

update movies

SET nombre="pelicula",genre="generos"
WHERE id=1;

DELETE FROM movies
WHERE id=1;