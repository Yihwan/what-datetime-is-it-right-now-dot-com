import React, { useState } from 'react';
import Modal from 'react-modal';

import { 
  customModalStyles, 
  WindowContainer, 
  Menu, 
  OptionsButton, 
  ControlButton, 
  WindowTitle, 
  ModalHeader, 
} from './style';

Modal.setAppElement('#___gatsby');

const LaunchpadWindow = ({ title, children, componentName, optionsHeader, optionsContent }) => {
  const [ isWindowOpen, toggleWindowOpen ] = useState(true);
  const [ isOptionsModalOpen, toggleOptionsModalOpen ] = useState(false);

  return(
    <>
      <WindowContainer componentName={componentName} >
        <Menu>
          <WindowTitle>{title}</WindowTitle>
          <div>
            {optionsContent && <OptionsButton onClick={() => toggleOptionsModalOpen(true)}>Options</OptionsButton>}
            <ControlButton onClick={() => toggleWindowOpen(!isWindowOpen)}>
              {isWindowOpen ? '⎽' : '⏴'}
            </ControlButton>
          </div>
        </Menu>
        {isWindowOpen && children}
      </WindowContainer>
      <Modal
        isOpen={isOptionsModalOpen}
        onRequestClose={() => toggleOptionsModalOpen(false)}
        style={customModalStyles}
      >
        <ModalHeader>
          <div>{optionsHeader}</div>
          <ControlButton onClick={() => toggleOptionsModalOpen(false)}>✕</ControlButton>
        </ModalHeader>
        {optionsContent}
      </Modal>
    </>
  );
};

export default LaunchpadWindow;