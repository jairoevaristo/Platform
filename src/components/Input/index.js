import React from 'react';

import { Container, InputField } from './styles';

function Input({
  name,
  title,
  type,
  source,
  focus = false,
}) {
  return (
    <Container>
        <img src={source} alt={name} />
        
        <InputField
          type={type}
          placeholder={title}
          name={name}
          autoFocus={focus} 
        />
    </Container>
  );
};

export default Input;