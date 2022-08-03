const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');
const { artworks } = require('./data');

app.use(cors())
app.use(express.json())

const DEFAULT_LIMIT = 10;

app.get('/gallery', (req, res) => {
  let { start = 0, limit = DEFAULT_LIMIT } = req.query;
  start = Number(start);
  limit = Number(limit);

  const items = artworks.slice(start, start + limit);
  const hasMore = artworks.length > start + limit;

  res.status(200).send({ items, hasMore });
});

app.listen(PORT);

