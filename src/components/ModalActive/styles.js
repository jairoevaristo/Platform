import styled from 'styled-components';
import { ButtonForm } from '../Button/styles';

export const WrapperModal = styled.div`
  width: 100vw;
  height: 100vh;

  display: ${({ modal }) => (modal ? 'flex' : 'none' )};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 50px 0;

  background-color: rgba(0, 0, 0, .2);
  color: #fff;

  position: absolute;
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 560px;
  height: 60%;

  pointer-events: none;

  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #000;

  border-radius: 15px;

  display: ${({ active }) => (active ? 'flex' : 'none' )};

  z-index: 2;

  h1 {
    font-size: 36px;
  }
`;

export const ButtonExit = styled(ButtonForm)`
  margin: 20px 0;
  
  background-color: ${({ color }) => color};
  
  padding: 10px 40px;
`;