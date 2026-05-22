const fs = require('fs');
const path = require('path');
const { getDb } = require('./db');

async function initDb() {
  const db = await getDb();
  
  let schema = fs.readFileSync(path.join(__dirname, '../schema.sql'), 'utf-8');
  let seed = fs.readFileSync(path.join(__dirname, '../seed.sql'), 'utf-8');

  // Convert Postgres syntax to SQLite syntax
  schema = schema.replace(/SERIAL PRIMARY KEY/g, 'INTEGER PRIMARY KEY AUTOINCREMENT');
  // SQLite doesn't strictly need VARCHAR sizes but accepts them. 
  // It handles TIMESTAMP DEFAULT CURRENT_TIMESTAMP fine.

  console.log('Running schema...');
  await db.exec(schema);

  console.log('Running seed...');
  try {
    await db.exec(seed);
    console.log('Database initialized successfully.');
  } catch (e) {
    if (e.message.includes('UNIQUE constraint failed') || e.message.includes('PRIMARY KEY')) {
      console.log('Data might already be seeded.');
    } else {
      console.error('Error seeding data:', e);
    }
  }
}

initDb().catch(console.error);
