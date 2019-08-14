import React from 'react';

import { WindowContainer, WindowTitle } from './style';

const LaunchpadWindow = ({ title, children }) => (
  <WindowContainer>
    <WindowTitle>{title}</WindowTitle>
    {children}
  </WindowContainer>
);

export default LaunchpadWindow;