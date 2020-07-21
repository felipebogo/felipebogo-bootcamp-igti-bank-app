import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255,255,255,1);
  border-radius: 4px;
  margin: 10px 0;
  box-shadow: 0 3.2px 7.2px 0 
  rgba(0, 0, 0, .132),0 .6px 1.8px 0 
  rgba(0, 0, 0, .108);
  padding: 15px 15px;
  flex-wrap: wrap;
`;

export const Label = styled.div`
  span:first-child{
    font-weight:500;
    margin-right: 5px;
  }
  
  span:nth-child(2){
    font-weight:500;
    
    ${(props) =>
    (props.sinal === "+" &&
      css`
        color: #4CAF50;;
      `) ||
    (props.sinal === "-" &&
      css`
        color: #F44336;;
      `)
    } 
  }
`;