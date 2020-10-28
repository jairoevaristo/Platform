import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h1`
  width: 100%;
  max-width: 500px;

  margin-right: 40px;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 80px;
    margin-bottom: 10px;

    color: #f5f5fb;
  }

  span {
    font-size: 25px;

    align-self: flex-start;

    color: #ccc;  
  }

`;

export const Card = styled.div`
  height: 500px;
  width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.5);

  padding: 0 25px;

  background-color: #121214;

  h1 {
    margin-top: 30px;
    margin-bottom: 10px;

    color: #ccc;  

    font-size: 40px;

  }
`;

export const WrapperFields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: 230px;
`;
