import React from 'react';

import { WrapperModal, Modal } from './styles';

function ModalActive({ active, children, clickExit, modal }) {
  return (
    <WrapperModal modal={modal}>
        <Modal active={active}>
          {children}
          <button onClick={clickExit}>sair</button>
        </Modal>
    </WrapperModal>
  );
};

export default ModalActive;