const sqlite3 = require("sqlite3");

const { NODE_ENV = "development" } = process.env;
const DATABASE = `${__dirname}/newsalerts-${NODE_ENV}.db`;

/*
  This function 
  1. Checks if there is a database, and if not creates one
  2. Executes the given SQL query
 */

module.exports.query = async (...props) => {
  try {
    if (db === null) {
      db = await getDatabase();
    }

    // executes given query
    return new Promise((resolve, reject) => {
      db.all(...props, function (error, tables) {
        if (error) reject(error);
        resolve(tables);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

// only necessary for initiliazation
function createTables(db, resolve, reject) {
  db.exec(
    `
      CREATE TABLE IF NOT EXISTS articles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        platform_name TEXT NOT NULL,
        platform_id TEXT,
        platform_rank INT,
        platform_title text NOT NULL,
        platform_points INT,
        website_link TEXT NOT NULL,
        website_title TEXT,
        website_description TEXT,
        keywords TEXT,
        interesting_reason TEXT,
        interesting_index INTEGER,
        first_seen TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        alerted_at TIMESTAMP,
        characters TEXT
      );

      CREATE UNIQUE INDEX IF NOT EXISTS unique_platfrom_id
        ON articles (platform_id, platform_name);
    `,
    (error) => {
      if (error) return reject(error);

      // Add column and silently fail when it already exists
      db.exec(
        "ALTER TABLE articles ADD COLUMN interesting_reason TEXT;",
        () => {}
      );
      db.exec(
        "ALTER TABLE articles ADD COLUMN interesting_index INTEGER;",
        () => {}
      );

      return resolve(db);
    }
  );
}

// checks if database exists at given address => then opens in read/write mode, else creates new one
const getDatabase = () =>
  new Promise((resolve, reject) => {
    const db = new sqlite3.Database(
      DATABASE,
      sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
      (error) => {
        if (error) {
          reject(error);
        } else if (error === null) {
          // only for initalization
          return createTables(db, resolve, reject);
        } else {
          reject(new Error("Unknown sqlite3 error"));
        }
      }
    );
  });

let db = null;
