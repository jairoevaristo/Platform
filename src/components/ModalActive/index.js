import React, { useState } from 'react';
import Lottie from 'react-lottie';

import { WrapperModal, Modal } from './styles';

function ModalActive({ active, children, clickExit, modal, animated }) {
  const [animation, setAnimation] = useState({
    isStopped: false,
    isPaused: false,
  });

  const animationData = require(`../../utils/${animated}.json`);
  
  const defaultOptions = {
    loop: false,
    autoplay: false, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <WrapperModal modal={modal}>
        <Modal active={active}>
          <h1>{children}</h1>
          <Lottie 
            options={defaultOptions}
            height={250}
            width={250}
            isStopped={animation.isStopped}
            isPaused={animation.isPaused}
          />
        </Modal>
    </WrapperModal>
  );
};

export default ModalActive;