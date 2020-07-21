const {
  getTransactionsService,
  getTransactionByIdService,
  saveTransactionService,
  updateTransactionService,
  deleteTransactionService
} = require('../services/transactionService');

const getTransactions = async (req, res) => {
  try {
    const result = await getTransactionsService(req.params.period);
    res.send(result);

  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Algum erro ocorreu ao retornar os dados' });
  }
}
const getTransactionById = async (req, res) => {
  try {
    const result = await getTransactionByIdService(req.params.id);
    res.send(result);

  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Algum erro ocorreu ao retornar os dados' });
  }
}

const saveTransaction = async (req, res) => {
  try {
    const transaction = await saveTransactionService(req.body);
    res.send({ transaction });

  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
const updateTransaction = async (req, res) => {
  try {
    await updateTransactionService(req.body);
    res.send(200);

  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
const deleteTransaction = async (req, res) => {
  try {
    await deleteTransactionService(req.params.id);
    res.send(200);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getTransactions,
  getTransactionById,
  saveTransaction,
  updateTransaction,
  deleteTransaction
};