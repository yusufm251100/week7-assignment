import { db } from "./server.js";

//Create tables
db.query(
  `
  CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,  
    username VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    job VARCHAR(100) NOT NULL
  );
`
);

// db.query(
//   `
//   INSERT INTO Users (username, location, job)
//   VALUES ('John Doe', 'New York', 'Software Engineer')
// `
// );
