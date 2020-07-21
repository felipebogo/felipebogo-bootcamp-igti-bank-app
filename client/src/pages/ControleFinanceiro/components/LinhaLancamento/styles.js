import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  padding: 5px 0;
  box-shadow: 0 1px 0 var(--palette-black-alpha-8,rgba(0, 0, 0, .08));

  .svg-up,.svg-down{
    font-size: 1.5rem;
    margin: 0 5px;
  }

  .svg-up{
    color: #4CAF50;
  }

  .svg-down{
    color: #F44336;
  }

  &:hover{
    background-color: var(--component-grid-row-hover-color,rgba(0, 0, 0, .02));
  }

  .label-dia{
    font-weight: 700;
    margin: 0 10px;
  }
  
  .div-lcto{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 6;
    
    span:first-child{
      font-weight: 700;
    }
    span{
      margin-left: 10px;
    }

  }

  .label-valor{
    flex: 3;
    font-weight: 700;
  }

  .div-acoes{
    flex: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 10px;

    button{
      background: transparent;
      border: none;
      &+button{
        margin-left: 3px;
      }
      svg{
        font-size: 1.5rem;
      }
    }
  }
`;