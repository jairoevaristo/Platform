import React, { useRef, useEffect } from 'react';
import { FiHome, FiPlusCircle, FiUser, FiSettings } from 'react-icons/fi';

import { Container, MenuItems, Wrapper } from './styles';

function Menu() {
  const WrapperRef = useRef(null);

  useEffect(() => {
    WrapperRef.current.focus();
  }, []);

  return (
    <Container>
      <MenuItems>
        <Wrapper ref={WrapperRef}>
            <FiHome size={30} color='#ccc' /> 
            <h2>Dashboard</h2>
        </Wrapper>

        <Wrapper>
            <FiPlusCircle size={30} color='#ccc' /> 
            <h2>Cadastrar</h2>
        </Wrapper>

        <Wrapper>
            <FiUser size={30} color='#ccc' /> 
            <h2>Usuários</h2>
        </Wrapper>

        <Wrapper>
            <FiSettings size={30} color='#ccc' /> 
            <h2>Ajustes</h2>
        </Wrapper>

      </MenuItems>
    </Container>  
  );
}

export default Menu;