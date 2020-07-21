import React, { useEffect, useState, useCallback } from 'react'

import {Container} from './styles';

export default function InputField({id, name, label, placeholder, type, value, onChange, isErrored, ...rest}) {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  

  useEffect(() => {
    setInputValue(value || "");
    setIsFilled(!!value);
  }, [value]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputChange = (event) =>{
    setInputValue(event.target.value);
    setIsFilled(!!event.target.value);
    onChange(event.target.value);
  }
  
  return (
    <Container isErrored={isErrored} isFocused={isFocused} isFilled={isFilled} type={type} >
      <label htmlFor={id}>{label}</label>
      <input 
      value={inputValue} 
      id={id} 
      type={type || "text"} 
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      onChange={handleInputChange}
      {...rest} 
      />
    </Container>
  );
}
