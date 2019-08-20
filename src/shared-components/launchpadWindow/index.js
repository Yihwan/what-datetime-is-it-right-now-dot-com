import React, { useState } from 'react';

import { WindowContainer, Menu, ControlButton, WindowTitle } from './style';

const LaunchpadWindow = ({ title, children, componentName }) => {
  const [ isWindowOpen, toggleWindowOpen ] = useState(true);

  return(
    <WindowContainer componentName={componentName}>
      <Menu>
        <WindowTitle>{title}</WindowTitle>
        <ControlButton onClick={() => toggleWindowOpen(!isWindowOpen)}>
          {isWindowOpen ? '⎽' : '⏴'}
        </ControlButton>
      </Menu>
      {isWindowOpen && children}
    </WindowContainer>
  );
};

export default LaunchpadWindow;