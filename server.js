const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
app.use(bodyParser.json());

// API endpoint
app.post('/api/calculate-value', (req, res) => {
  const products = req.body;

  if (!Array.isArray(products) || products.length === 0) {
    return res.status(400).json({ error: 'Invalid input: Expected non-empty array of products' });
  }

  let totalValue = 0;
  const stmt = db.prepare('INSERT INTO products (name, price, quality) VALUES (?, ?, ?)');

  products.forEach(product => {
    if (!product.name || typeof product.price !== 'number' || typeof product.quality !== 'number') {
      return res.status(400).json({ error: 'Invalid product object: Each product must have name, price, and quality' });
    }

    totalValue += product.price * product.quality;
    stmt.run(product.name, product.price, product.quality);
  });

  stmt.finalize();

  res.json({ totalValue });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;