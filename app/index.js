const express = require('express');
const app = express();

// PostgreSQLの設定
const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'postgres_db',
  database: 'webapp',
  password: 'postgres',
  port: 5432,
})

// ルーティングの設定
app.get('/api/pokemon', (req, res) => {
  pool.query('SELECT * FROM pokemon', (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.json(result.rows);
  });
});


const port = 3000;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
}); 
