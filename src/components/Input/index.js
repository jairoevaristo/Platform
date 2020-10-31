import React from 'react';

import { Container, InputField } from './styles';

function Input({
  name,
  title,
  type,
  source,
  handleChange,
  focus = false,
  inputRef,
}) {
  return (
    <Container>
        <img src={source} alt={name} />
        
        <InputField
          type={type}
          placeholder={title}
          name={name}
          autoFocus={focus}
          onChange={handleChange}
          ref={inputRef} 
        />
    </Container>
  );
};

export default Input;