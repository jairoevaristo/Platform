import styled from 'styled-components';

export const ButtonForm = styled.button`
  width: 220px;
  height: 60px;

  margin: 50px 0;

  font-size: 25px;

  border-radius: 5px;
  
  background-color: ${({ color }) => color};
  color: #fff;

  cursor: pointer;

  transition: background .2s linear;
  transition: transform .2s linear;

  &:hover {
    opacity: .8;
  
  }
  
  &:active {
    transform: scale(0.95);
  }

`;