const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require('../models/TransactionModel');


const getTransactionsService = async (period) => {
  const result = await TransactionModel.find({ yearMonth: period }).sort({ day: 0, category: 0, description: 0 });
  return { length: result.length, transactions: result };
};

const getTransactionByIdService = async (id) => {
  const result = await TransactionModel.findById(id);
  return result;
};

const saveTransactionService = async (transaction) => {
  const newTransaction = new TransactionModel(transaction);
  const result = await newTransaction.save();
  return result;
};

const updateTransactionService = async (transaction) => {
  await TransactionModel.findByIdAndUpdate(transaction._id, transaction,
    { new: true, useFindAndModify: false });
};

const deleteTransactionService = async (id) => {
  await TransactionModel.findByIdAndDelete(id);
};



module.exports = {
  getTransactionsService,
  getTransactionByIdService,
  saveTransactionService,
  updateTransactionService,
  deleteTransactionService
};
