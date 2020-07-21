import React, { useState, useCallback } from 'react';

import { Container } from './styles';

export default function Radio({ id, label, name, value, checkedOption, onChange, ...rest }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    onChange(e.target.value);
  }

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container isFocused={isFocused}>
      <label htmlFor={id}>
        <input
          name={name}
          type="radio"
          value={value}
          checked={checkedOption === value}
          onChange={handleChange} id={id}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest} />
        <span>{label}</span>
      </label>
    </Container>
  )
}
