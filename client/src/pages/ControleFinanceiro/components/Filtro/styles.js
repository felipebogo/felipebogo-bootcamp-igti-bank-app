import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  align-items: center;
  justify-content: flex-start;
  background: rgba(0, 0, 0, .06);
  padding: 0 10px;

  .svg-filtro{
    margin-right: 10px;
    font-size: 2rem;
    color: rgb(118, 118, 118);

    ${(props) =>
    props.isFiltered &&
    css`
      color: rgba(0, 0, 0,0.8);
    `
    }
  }
  
  input{
    border: none !important;
    margin: 0px !important;

    &::placeholder {
      color: rgb(118, 118, 118);
    }

    &:focus{
      box-shadow: none !important;
    }
  }

  button{
    width: 30px;
    border: none;
    padding: 0;
    margin: 0;
    background-color: transparent;
    
    &:focus{
      background-color: transparent;
    }

    ${(props) =>
    !props.isFiltered &&
    css`
      display: none;
    `
    }

    
    svg{
    margin-right: 10px;
    font-size: 2rem;
    color: rgb(118, 118, 118);
    }
  }
`;