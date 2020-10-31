import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';

import { WrapperModal, Modal } from './styles';

function ModalActive({ active, children, clickExit, modal, animated }) {
  const [animation, setAnimation] = useState({
    isStopped: true,
    isPaused: false,
  });

  useEffect(() => {
    setAnimation({
      ...animation,
      isStopped: false,
    })
  }, [animation]);

  const animationData = require(`../../utils/${animated}.json`);
  
  const defaultOptions = {
    loop: false,
    autoplay: true, 
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