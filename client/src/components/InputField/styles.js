import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 5px 0;

  label{
    position: absolute;
    
    ${(props) =>
    (props.isErrored) &&
    css`
      color: #c0392b;
    `
  } 
    
    ${(props) => {
    return ((props.type === "date") &&
      css`
      top: -12px;
      font-size: 0.9rem;
    `) ||
      css`
      font-size: 1rem;
      top: 20%;
    `}}
    
    transition: top 0.3s, font-size 0.3s ;

    ${(props) =>
    ((props.isFilled || props.isFocused || props.type === "date") &&
      css`
      top: -12px;
      font-size: 0.9rem;
    `) ||
    css`
      font-size: 1rem;
      top: 20%;
    `
  }
    ${(props) =>
    (props.isFocused) &&
    css`
      color: rgb(0,120,212);
      font-weight: 600;
    `
  }
  }
  
  input{
    ${(props) =>
    (props.isErrored) &&
    css`
      border-bottom: 1px solid #c0392b !important;
      box-shadow: 0 1px 0 0 #c0392b !important;
    `
  } 
    
    &:focus{
      border-bottom: 1px solid rgb(0,120,212) !important;
      box-shadow: 0 1px 0 0 rgb(0,120,212) !important;
      top: -12px;
      font-size: 0.9rem;
    }
  }
  ${(props) =>
    !props.isFilled &&
    css`
       input[type=Date]{
        color: #9e9e9e;
      }
    `
  }
`;