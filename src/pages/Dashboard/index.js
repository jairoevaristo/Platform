import React from 'react';

import { Container } from './styles';

import Platform from '../../assets/images/platform.svg';
import Menu from '../../components/Menu';

function Dashboard () {
  return (
    <Container>
      <aside>
        <header>
          <img src={Platform} alt='Platform' />
          <h1>Platform</h1>
        </header>
        <Menu />
      </aside>
    </Container>
  );
}

export default Dashboard;