import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 60px 0;
`;

export const MenuItems = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 400px;
  width: 100%;

  padding: 0 15px;
`;

export const Wrapper = styled.button`
  height: 60px;
  width: 100%;

  border-radius: 10px;

  padding: 0 25px;

  cursor: pointer;

  margin-bottom: 30px; 

  transition: all ease-in-out 200ms;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: rgba(255, 255, 255, 0.7);

    font-size: 18px;
    font-weight: normal;

    display: flex;
    align-items: flex-start;
    width: 76%;
  }

  &:focus {
    background-color: #9147FF;
  }
`;
