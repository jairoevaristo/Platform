import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 60px 0;

  h2 {
    color: #ccc;

    margin-left: 20px;

    font-size: 24px;
    font-weight: normal;

    display: flex;
    align-items: flex-start;
    width: 60%;
  }
`;

export const MenuItems = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 400px;
  width: 100%;

  padding: 0 27px;
  
`;

export const Wrapper = styled.button`
  height: 65px;
  width: 100%;

  border-radius: 15px;

  padding: 0 10px;

  cursor: pointer;

  margin-bottom: 30px; 

  transition: all ease-in-out 200ms;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:focus {
    background-color: #9147FF;
  }
`;
