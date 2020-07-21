import React from 'react'
import { Container, Label } from './styles';
import { formatMoney } from '../../../../util/formatters';

export default function Totalizador({ transactions }) {
  const sumTransactions = () => {
    if (!transactions) {
      return { receitas: 0, despesas: 0, lancamentos: 0, saldo: 0 };
    }
    const total = transactions.reduce((acum, current) => {
      const { type, value } = current;
      const newAcum = { ...acum };
      let receita = 0;
      let despesa = 0;
      type === "+" ? receita = value : despesa = value;
      newAcum.receitas += receita;
      newAcum.despesas += despesa;
      newAcum.saldo += receita - despesa;
      newAcum.lancamentos++;
      return newAcum;
    }, { receitas: 0, despesas: 0, lancamentos: 0, saldo: 0 });
    return total;
  }

  const { saldo, receitas, despesas, lancamentos } = sumTransactions();

  return (
    <Container>
      <Label >
        <span>Lançamento:</span>
        <span>{(lancamentos)}</span>
      </Label>
      <Label sinal="+">
        <span>Receitas:</span>
        <span>{formatMoney(receitas)}</span>
      </Label>
      <Label sinal="-">
        <span>Despesas:</span>
        <span>{formatMoney(despesas)}</span>
      </Label>
      <Label sinal={saldo >= 0 ? "+" : "-"}>
        <span>Saldo:</span>
        <span>{formatMoney(saldo)}</span>
      </Label>


    </Container>
  )
}
