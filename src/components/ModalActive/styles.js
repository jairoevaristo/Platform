import styled from 'styled-components';

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
  width: 40%;
  height: 60%;

  position: absolute;

  background-color: #000;

  border-radius: 15px;

  display: ${({ active }) => (active ? 'flex' : 'none' )};

  z-index: 2;
`;