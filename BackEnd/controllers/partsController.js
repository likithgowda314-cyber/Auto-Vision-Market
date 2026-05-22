const { getDb } = require('../db');

exports.getAllParts = async (req, res) => {
  try {
    const db = await getDb();
    const { category, make, model, minPrice, maxPrice } = req.query;
    let query = 'SELECT * FROM parts WHERE 1=1';
    const values = [];
    
    if (category) {
      query += ' AND category = ?';
      values.push(category);
    }
    if (make) {
      query += ' AND vehicle_make = ?';
      values.push(make);
    }
    if (minPrice) {
      query += ' AND oem_price >= ?';
      values.push(minPrice);
    }
    if (maxPrice) {
      query += ' AND oem_price <= ?';
      values.push(maxPrice);
    }

    query += ' ORDER BY popularity DESC LIMIT 50';
    const rows = await db.all(query, values);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getPartById = async (req, res) => {
  try {
    const db = await getDb();
    const row = await db.get('SELECT * FROM parts WHERE id = ?', [req.params.id]);
    if (!row) return res.status(404).json({ error: 'Part not found' });
    res.json(row);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getPartsByVehicle = async (req, res) => {
  try {
    const db = await getDb();
    const { make, model, year } = req.params;
    const query = `
      SELECT p.*, 
             (p.market_price - p.oem_price) as savings,
             ((p.market_price - p.oem_price) / p.market_price * 100) as savings_percentage
      FROM parts p
      WHERE p.vehicle_make = ? AND p.vehicle_model = ? AND p.vehicle_year = ?
      ORDER BY p.popularity DESC LIMIT 100
    `;
    const rows = await db.all(query, [make, model, year]);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getTopSellingParts = async (req, res) => {
  try {
    const db = await getDb();
    const rows = await db.all('SELECT * FROM parts ORDER BY monthly_demand DESC LIMIT 10');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getPriceComparison = async (req, res) => {
  try {
    const db = await getDb();
    const query = `
      SELECT part_name, oem_price as company_fixed_price, market_price as local_store_price,
             (market_price - oem_price) as you_save, ((market_price - oem_price) / market_price * 100) as savings_percentage, availability
      FROM parts WHERE id = ?
    `;
    const row = await db.get(query, [req.params.id]);
    if (!row) return res.status(404).json({ error: 'Part not found' });
    res.json(row);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
