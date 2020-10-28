import React from 'react';

import { ButtonForm } from './styles';

function Button({ name, color }) {
  return (
    <ButtonForm color={color}>{name}</ButtonForm>
  );
};

export default Button;