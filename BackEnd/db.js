const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

let dbPromise = null;

async function getDb() {
  if (!dbPromise) {
    dbPromise = open({
      filename: '../autoprice.db',
      driver: sqlite3.Database
    });
  }
  return dbPromise;
}

module.exports = { getDb };
