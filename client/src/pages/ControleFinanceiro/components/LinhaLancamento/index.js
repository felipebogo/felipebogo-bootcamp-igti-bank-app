import React from 'react'
import { Container } from './styles';
import {useHistory} from 'react-router-dom';
import { FiTrash, FiEdit, FiArrowUp, FiArrowDown } from 'react-icons/fi';

import {formatMoney} from '../../../../util/formatters';
import api from '../../../../services/api';

export default function LinhaLancamento({ data, onDelete }) {
  const history = useHistory();
  const { description, value, category, day, type, yearMonth } = data;
  
  const handleEditClick = () =>{
    history.push(`/cadastro/${yearMonth}/${data._id}`);
  }
  const handleDeleteClick = async () =>{
    await api.delete(`/api/transaction/${data._id}`);
    onDelete();
  }
  
  return (
    <Container>
      {type==="+" ? <FiArrowUp className="svg-up" />:<FiArrowDown className="svg-down" />}
  <span className="label-dia">{day}</span>
      <div className="div-lcto">
        <span>{category}</span>
        <span>{description}</span>
      </div>
      <span className="label-valor">{formatMoney(value)}</span>
      <div className="div-acoes">
        <button onClick={handleEditClick}><FiEdit /></button>
        <button onClick={handleDeleteClick}><FiTrash /></button>
      </div>
    </Container>
  )
}
