const dbQueries = require('../dbQueries');

const addUser = async (req, res) => {
  const { emailAddress } = req.body;
  await dbQueries.addUser(emailAddress);
  res.status(201).send(`User added with email address: ${emailAddress}`);
};

const addOrder = async (req, res) => {
  const { orderDate, orderCost, orderStatus, customerId } = req.body;
  await dbQueries.addOrder(orderDate, orderCost, orderStatus, customerId);
  res.status(201).send('Order submitted');
};

const addOrderDetails = async (req, res) => {
  const { quantity, orderId, productId } = req.body;
  await dbQueries.addOrderDetails(quantity, orderId, productId);
  res.status(201).send('Order details submitted');
};

module.exports = {
  addUser,
  addOrder,
  addOrderDetails,
};
