import React, { useState, useEffect, useRef } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Container } from './styles';
import moment from 'moment';

export default function SeletorMeses({ onAnteriorClick, onProximoClick, onChangeSelect, currentMonth }) {
  const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const [mesAtual, setMesAtual] = useState(null);
  const selectInput = useRef();

  useEffect(() => {
    if (!mesAtual) {
      currentMonth ? setMesAtual(moment(currentMonth)) : setMesAtual(moment());
      console.log("effect if");
    }
    console.log("effect");
  }, [mesAtual,currentMonth]);


  const optionsCalendario = (anoInicio = 2019, anoFim = 2021) => {
    const options = []
    for (let anoAtual = anoInicio; anoAtual <= anoFim; anoAtual++) {
      for (let mes = 0; mes < 12; mes++) {
        const mesLabel = `${meses[mes]}/${anoAtual}`
        const mesStr = (mes + 1).toString().padStart(2, '0');
        const mesValue = `${anoAtual}-${mesStr}`;
        const option = <option key={mesValue} value={mesValue}>{mesLabel}</option>;
        options.push(option);
      }
    }
    return options;
  }

  const handleAnterior = () => {
    const mesAnterior = moment(mesAtual).subtract(1, 'months');
    const mesAnteriorStr = mesAnterior.format('YYYY-MM');
    setMesAtual(mesAnterior);
    onAnteriorClick(mesAnteriorStr);
  }

  const handleProximo = () => {
    const mesProximo = moment(mesAtual).add(1, 'months');
    const mesProximoStr = mesProximo.format('YYYY-MM');
    setMesAtual(mesProximo);
    onProximoClick(mesProximoStr);
  }

  const handleChangeSelect = (e) => {
    setMesAtual(moment(e.target.value));
    onChangeSelect(e.target.value);
  }

  const existeAnterior = () => {
    if (!mesAtual){
      return true;
    }
    const mesAnterior = moment(mesAtual).subtract(1,'months');
    const query = `[value="${mesAnterior.format('YYYY-MM')}"]`;
    return !selectInput.current.querySelector(query);
  }

  const existeProximo = () => {
    if (!mesAtual){
      return true;
    }
    const proximoMes = moment(mesAtual).add(1,'months');
    const query = `[value="${proximoMes.format('YYYY-MM')}"]`;
    return !selectInput.current.querySelector(query);
  }

  return (
    <Container>
      <button disabled={existeAnterior()} onClick={handleAnterior} type="button">
        <FiChevronLeft />
      </button>
      <select 
        onChange={handleChangeSelect} 
        value={mesAtual ? mesAtual.format('YYYY-MM') : ""}
        type="text" ref={selectInput}
        >
        {optionsCalendario()}
      </select>
      <button disabled={existeProximo()}  onClick={handleProximo}>
        <FiChevronRight />
      </button>
    </Container>
  )
}
