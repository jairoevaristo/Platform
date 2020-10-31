import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Text,
  Card,
  WrapperFields
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import ModalActive from '../../components/ModalActive';

import Email from '../../assets/images/email.svg'
import Platform from '../../assets/images/platform.svg'
import Lock from '../../assets/images/lock.svg'

function App() {
  const inputRef = useRef(null);
  const history = useHistory(); 

  const [input, setInput] = useState([]);
  const [modal, setModal] = useState(false);
  const [active, setAcitve] = useState(false);
  const [showAnimation, setShowAnimation] = useState();

  const clickOpen = () => {
    setAcitve(true);
    setModal(true);

    if (input.email === 'jairo@gmail.com') {
      setShowAnimation(2);
    }

    else if (input.email === undefined) {
       setShowAnimation(0);
    }  
  
    else {
      setShowAnimation(1);
    }
    console.log(showAnimation);
    console.log(input.email);
    console.log(showAnimation);
  };

  function clickExit() {

  }

  function handleChange(e) {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  function onSubmit(data) {
    data.preventDefault();

    clickOpen();

    setTimeout(() => {
      window.location.reload()  
    }, 2000);

    inputRef.current.focus();
  };

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
        <Card onSubmit={onSubmit} autoComplete='off'>
          <h1>Acessar plataforma</h1>
          <WrapperFields>
            <Input
              title="Email"
              name="email"
              source={Email}
              focus={true}
              handleChange={handleChange}
              inputRef={inputRef}
            />

            <Input
              type="password"
              title="Senha"
              name="senha"
              source={Lock}
              handleChange={handleChange}
            />

          </WrapperFields>
          <Button name="Entrar" color="#9147FF" />
        </Card>
      </motion.div>
       
       {showAnimation === 0 && (
        <ModalActive modal={modal} active={active} animated='animation_warning'>
          Preencha os campos !
        </ModalActive>
       )}  
       {showAnimation === 1 && (
        <ModalActive modal={modal} active={active} animated='animation_error'>
          E-mail ou senha inválidos !
        </ModalActive>
        )}  
       {showAnimation === 2 && (
          <ModalActive modal={modal} active={active} animated='animation_success'>
            Logado com sucesso !
          </ModalActive>
       )}  
    </Container>
  );
}

export default App;
