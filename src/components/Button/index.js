import React from 'react';

import { ButtonForm } from './styles';

function Button({ name, color, functionClick }) {
  return (
    <ButtonForm type="submit" color={color} onClick={functionClick}>{name}</ButtonForm>
  );
};

export default Button;