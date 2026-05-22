const fs = require('fs');
const path = require('path');
const { getDb } = require('./db');

async function initDb() {
  const db = await getDb();
  
  let schema = fs.readFileSync(path.join(__dirname, '../schema.sql'), 'utf-8');
  let seed = fs.readFileSync(path.join(__dirname, '../seed.sql'), 'utf-8');

  // No longer needed to convert to SQLite
  // schema = schema.replace(/SERIAL PRIMARY KEY/g, 'INTEGER PRIMARY KEY AUTOINCREMENT');

  console.log('Running schema...');
  await db.exec(schema);

  console.log('Running seed...');
  try {
    await db.exec(seed);
    console.log('Database initialized successfully.');
  } catch (e) {
    if (e.message.includes('UNIQUE constraint failed') || e.message.includes('PRIMARY KEY') || e.code === '23505') {
      console.log('Data might already be seeded.');
    } else {
      console.error('Error seeding data:', e);
    }
  }
}

initDb().catch(console.error);
