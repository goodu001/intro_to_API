const Database = require('better-sqlite3');

const db = new Database('database.sqlite');

db.exec(`
  CREATE TABLE IF NOT EXISTS models (
    id INTEGER PRIMARY KEY,
    name TEXT,
    description TEXT
  );
`);

module.exports = db