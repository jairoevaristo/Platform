import React from 'react';
import { motion } from 'framer-motion';

import { Container, Text, Card, WrapperFields } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Email from '../../assets/images/email.svg'
import Platform from '../../assets/images/platform.svg'
import Lock from '../../assets/images/lock.svg'


function App() {
  return (
    <Container>
      <motion.div initial={{
        opacity: 0,
        y: 100,
       }}
       animate={{
         opacity: 1,
         y: 0
       }}
       transition={{
         duration: 1,
       }}
      >
        <Text>
          <h1>Bem-vindo a Platform<img src={Platform} alt="logo" /></h1>
          <span>Venha e veja como estão os usuarios<br/> do seu site, e tenha o controle sobre <br/>seus conteúdos.</span>
        </Text>
      </motion.div>
      
      <motion.div initial={{
        opacity: 0,
        y: -100,
       }}
       animate={{
         opacity: 1,
         y: 0
       }}
       transition={{
         duration: 2,
       }}
      >
        <Card>
          <h1>Acessar plataforma</h1>
          <WrapperFields>
            <Input type="email" name="Email" source={Email} />
            <Input type="password" name="Senha" source={Lock} facus={false} />
          </WrapperFields>
          <Button name="Entrar" color="#9147FF" />
        </Card>
      </motion.div>
    </Container>
  );
}

export default App;
