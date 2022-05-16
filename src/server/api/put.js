const dbQueries = require('../dbQueries');

const updateStock = async (req, res) => {
  const { stockCount, productId } = req.body;
  const dbQuery = await dbQueries.updateStock(stockCount, productId);
  res.status(200).send(`Stock updated with productId:${productId} and new count is ${stockCount}`);
};

module.exports = {
  updateStock,
};
