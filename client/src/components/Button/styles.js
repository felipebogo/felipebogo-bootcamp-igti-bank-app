import styled, {css} from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0 10px;
  height: 40px;
  min-width: 80px;
  color: #fff;
  font-size: 1rem;

  & + button{
    margin-left: 10px;
  }

  ${(props) =>
    props.action === "confirm" &&
    css`
      background-color: rgb(0, 120,212);
      &:hover,&:focus{
        background-color: rgb(0, 90,158);
      }
      
      svg {
        font-size: 2rem; 
        color: #fff;
      }
    `
    }
  ${(props) =>
    props.action === "cancel" &&
    css`
      background-color: #e74c3c;
      &:hover,&:focus{
        background-color: #c0392b;
      }
      
      svg {
        font-size: 2rem; 
        color: #fff;
      }
    `
    }
`;
