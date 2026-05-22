const { Pool } = require('pg');

let pool = null;

async function getDb() {
  if (!pool) {
    if (!process.env.DATABASE_URL) {
      console.warn("WARNING: No DATABASE_URL provided. Application requires a PostgreSQL database to run properly.");
    }
    
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      // Render databases require SSL if connecting externally
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : (process.env.DATABASE_URL && process.env.DATABASE_URL.includes('render.com') ? { rejectUnauthorized: false } : false)
    });
  }

  // Wrapper function to convert SQLite '?' to Postgres '$1, $2, etc.'
  const queryWrapper = async (text, params = []) => {
    let index = 1;
    const pgText = text.replace(/\?/g, () => `$${index++}`);
    return await pool.query(pgText, params);
  };

  return {
    all: async (text, params) => {
      const res = await queryWrapper(text, params);
      return res.rows;
    },
    get: async (text, params) => {
      const res = await queryWrapper(text, params);
      return res.rows[0];
    },
    run: async (text, params) => {
      let modifiedText = text;
      // If it's an INSERT, append RETURNING id to get the last inserted ID
      if (text.trim().toUpperCase().startsWith('INSERT') && !text.toUpperCase().includes('RETURNING')) {
        modifiedText += ' RETURNING id';
      }
      const res = await queryWrapper(modifiedText, params);
      return { lastID: res.rows.length ? res.rows[0].id : null };
    },
    exec: async (text) => {
      return await pool.query(text);
    }
  };
}

module.exports = { getDb };
