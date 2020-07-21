import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 700px;
  min-width: 300px;
  margin: 10px;
  overflow-y: hidden;

  background-color: rgba(255,255,255,1);
  border-radius: 4px;
  box-shadow: 0 3.2px 7.2px 0 
  rgba(0, 0, 0, .132),0 .6px 1.8px 0 
  rgba(0, 0, 0, .108);
  flex-wrap: wrap;

`;

export const InnerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
  flex: 1;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgb(0, 120,212);
  padding: 10px 0;
  color: #ecf0f1;
  border: none; 
  font-size: 1.7rem;
  font-weight: 700;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-width: 300px;
  justify-content: start;
  align-items: start;
  flex:1;

`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin: 20px 0;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;