import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 10px;
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 700;
  margin: 10px;
`;
export const Title2 = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
  margin: 5px;
`;

export const Acoes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 0;
`;

export const Lista = styled.div`
  width: 100%;
  background-color: rgba(255,255,255,1);
  border-radius: 4px;
  margin: 10px 0;
  box-shadow: 0 3.2px 7.2px 0 
  rgba(0, 0, 0, .132),0 .6px 1.8px 0 
  rgba(0, 0, 0, .108);
`;







