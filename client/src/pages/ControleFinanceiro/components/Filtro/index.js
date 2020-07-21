import React, { useState } from 'react'
import { FiFilter, FiX } from 'react-icons/fi';
import {Container} from './styles';

export default function Filtro({onFilter}) {

  const [filtro, setFiltro] = useState("");
  
  const handleChange = (e) => {
    setFiltro(e.target.value);
    onFilter(e.target.value);
  }

  const handleXclick = () => {
    setFiltro("");
    onFilter("");
  }
 
  return (
    <Container isFiltered={!!filtro}>
      <FiFilter className="svg-filtro" />
      <input onChange={handleChange} type="text" placeholder="Filtro" value={filtro} />
      <button onClick={handleXclick} ><FiX /></button>
    </Container>
  )
}
