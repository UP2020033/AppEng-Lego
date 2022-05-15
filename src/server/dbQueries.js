// I wrote the code myself, but // Ideas from (Node.Js, Express.Js, and PostgreSQL, 2020)

const { client } = require('./dbConnect');

const getItems = (req, res) => {
  client.query('SELECT * FROM products', (err, results) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json(results.rows);
  });
};

const getItemById = async (req, res) => {
  console.log(req.params.id);
  const id = parseInt(req.params.id, 10);
  await client.query(`
    SELECT 
      *
    FROM 
      products 
    WHERE 
      product_id = $1
    `, [id])
    .then((results) => {
      res.status(200).json(results.rows);
      console.log(results);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getItemPrice = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  await client.query(`
    SELECT
      product_price 
    FROM
      products
    WHERE
      product_id = $1
    `, [id])
    .then((results) => {
      res.status(200).json(results.rows);
      console.log(results);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getItems,
  getItemById,
  getItemPrice,
};
