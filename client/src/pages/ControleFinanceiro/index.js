import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import LinhaLancamento from './components/LinhaLancamento';
import Filtro from './components/Filtro';
import Spinner from '../../components/Spinner';
import api from '../../services/api';

import {
  Container,
  Content,
  Title,
  Title2,
  Acoes,
  Lista
} from './styles';

import SeletorMeses from './components/SeletorMeses';
import Totalizador from './components/Totalizador';
import Button from '../../components/Button';
import { useTransaction } from '../../hooks/TransactionProvider';
import moment from 'moment';

export default function ControleFinaceiro() {
  const history = useHistory();
  const { setTransaction } = useTransaction();
  const [transactions, setTransactions] = useState(null);
  const [filteredTransactions, setFilteredTransactions] = useState(null);
  const [currentMes, setCurrentMes] = useState(moment().format('YYYY-MM'));
  const [filter, setFilter] = useState("");

  const loadData = useCallback(
    async () => {
      setFilteredTransactions(null);
      const { data } = await api.get(`/${currentMes}`);
      setTransactions(data.transactions);
      setFilteredTransactions(data.transactions);
    },
    [setTransactions, setFilteredTransactions, currentMes],
  );

  const filterTransactions = useCallback(
    () => {
      if(!transactions){
        return;
      }
      const newTransactions = transactions.filter(transaction => transaction.description.toLowerCase().includes(filter.toLowerCase()));
      setFilteredTransactions(newTransactions);
    },
    [transactions, filter],
  );

  const refreshTransactions = useCallback(
    async () => {
      await loadData();
      setFilter(filter);
    },
    [filter, loadData],
  )

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    filterTransactions();
  }, [filterTransactions]);

  const handleAnteriorClick = (mes) => {
    setCurrentMes(mes);
  }
  const handleProximoClick = (mes) => {
    setCurrentMes(mes);
  }
  const handleChangeSelect = (mes) => {
    setCurrentMes(mes);
  }

  const handleFilter = (filtro) => {
    setFilter(filtro);
  }

  const handleNovoClick = () => {
    setTransaction(null);
    history.push(`/cadastro/${currentMes}`);
  }
  const handleDeleteLinha = async () => {
    await refreshTransactions();
  }

  return (
    <Container>
      <Content>
        <Title>Bootcamp Full Stack - Desafio Final</Title>
        <Title2>Controle Financeiro Pessoal</Title2>
        <SeletorMeses
          onAnteriorClick={handleAnteriorClick}
          onProximoClick={handleProximoClick}
          onChangeSelect={handleChangeSelect}
        />
        <Totalizador transactions={filteredTransactions} />
        <Acoes>
          <Button onClick={handleNovoClick}>
            <FiPlus />
            <span>Novo Lançamento</span>
          </Button>
        </Acoes>
        <Filtro onFilter={handleFilter} />
        {!!filteredTransactions ? <Lista>
          {filteredTransactions.map(data =>
            (<LinhaLancamento onDelete={handleDeleteLinha} key={data._id} data={data} />))}
        </Lista> : <Spinner />}
      </Content>

    </Container>
  )
}
