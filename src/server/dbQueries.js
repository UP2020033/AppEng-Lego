const { client } = require('./connectDB');

const getItems = (req, res) => {
  client.query('SELECT * FROM products', (err, results) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json(results.rows);
  });
};


module.exports = {
  getItems,
};
