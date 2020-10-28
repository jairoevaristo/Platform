import React from 'react';

import { Container, InputField } from './styles';


function Input({ name, type, source, facus = true}) {
  return (
    <Container>
        <img src={source} alt={name} />

        <InputField type={type} placeholder={name} autoFocus={facus} />
    </Container>
  );
};

export default Input;