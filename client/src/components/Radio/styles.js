import styled, { css } from 'styled-components';

export const Container = styled.p`
  [type="radio"]:checked+span:after{
    background-color: rgb(0,120,212);
  }

  [type="radio"]:checked+span:after{
    border: 2px solid rgb(0,120,212);
  }

  label{
    ${(props) =>
    (props.isFocused) &&
    css`
      color: rgb(0,120,212);
      font-weight: 600;
    `
  }
  }

`;