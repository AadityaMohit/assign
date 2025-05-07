const express = require('express');
const router = express.Router();
const db = require('../db');

// GE all products
router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM products ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// POST a product
router.post('/', async (req, res) => {
  const { name, price, description, image_url } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO products (name, price, description, image_url) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, price, description, image_url]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
