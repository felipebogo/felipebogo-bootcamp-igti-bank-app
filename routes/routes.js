const express = require('express');
const {
  getTransactions,
  getTransactionById,
  saveTransaction,
  updateTransaction,
  deleteTransaction,
} = require('../controllers/transactionController');

const transactionRouter = express.Router();

transactionRouter.get('/byId/:id', getTransactionById);
transactionRouter.get('/:period', getTransactions);
transactionRouter.post('/', saveTransaction);
transactionRouter.put('/', updateTransaction);
transactionRouter.delete('/:id', deleteTransaction);

module.exports = transactionRouter;
