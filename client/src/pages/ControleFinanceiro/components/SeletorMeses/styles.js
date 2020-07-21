import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0;

  select{
    display: inline-block;
    margin: 0 3px;
    min-width: 100px;
    font-family: "Consolas", "monospace", "Arial";
  }
  
  button{
    background-color: rgb(0, 120,212);
    border: none;
    padding: 0 10px;
    height: 40px;

    :hover{
      background-color: rgb(0, 90,158);
    }
    svg {
      font-size: 2rem; 
      color: #fff;
    }

  }

  button:disabled{
    background:rgba(0, 120,212,0.5);
    cursor:not-allowed
  }

`;