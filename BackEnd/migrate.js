const { getDb } = require('./db');

async function migrate() {
  const db = await getDb();
  try {
    await db.exec(`
      ALTER TABLE parts ADD COLUMN condition VARCHAR(50) DEFAULT 'New';
      ALTER TABLE parts ADD COLUMN seller_id INTEGER REFERENCES users(id);
      ALTER TABLE parts ADD COLUMN description TEXT;
      ALTER TABLE parts ADD COLUMN image_url VARCHAR(255);
    `);
    console.log('Migration successful.');
  } catch (err) {
    if (err.message.includes('duplicate column name')) {
      console.log('Migration already applied.');
    } else {
      console.error('Migration failed:', err);
    }
  }
}

migrate().catch(console.error);
