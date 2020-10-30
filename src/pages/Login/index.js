import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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

const schema = yup.object().shape({
  email: yup.string().email('E-mail Invalido').required('E-mail obrigatório'),
  senha: yup.string().required('Senha obrigatória'),
})

function App() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [input, setInput] = useState([]);
  const [modal, setModal] = useState(false);
  const [active, setAcitve] = useState(false);

  const clickOpen = () => {
    setModal(true);
    setAcitve(true)
  } 

  const clickExit = () => {
    setAcitve(false);
    setModal(false);
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
  }
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
        <Card onSubmit={onSubmit}>
          <h1>Acessar plataforma</h1>
          <WrapperFields>
            <Input
              title="Email"
              name="email"
              source={Email}
              focus={true}
              handleChange={handleChange}
              // register={register}
            />
              {/* <p>{errors.email?.message}</p> */}

            <Input
              type="password"
              title="Senha"
              name="senha"
              source={Lock}
              handleChange={handleChange}
              // register={register}
            />
            {/* <p>{errors.senha?.message}</p> */}

          </WrapperFields>
          <Button name="Entrar" color="#9147FF" functionClick={clickOpen} />
        </Card>
      </motion.div>
      <ModalActive modal={modal} clickExit={clickExit} active={active}>
        Logado com sucesso !
      </ModalActive>
    </Container>
  );
}

export default App;
