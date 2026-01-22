import { initDB } from "./db/init";
import { Database } from "bun:sqlite";

import { getMoviesByGenre, getMoviesByTitleAndGenre} from "./models/movies";

const db: Database = await initDB();
const m1 = getMoviesByGenre(db, "action")
console.log(m1)