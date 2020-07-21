import React from 'react';
import { Container } from './styles';

const Button = ({ action, children, ...rest }) => (
  <Container action={action || "confirm"} type="button" {...rest} >
    {children}
  </Container>
);

export default Button;
