import React from 'react';

import { WindowContainer, WindowTitle } from './style';

const LaunchpadWindow = ({ title, children, componentName }) => (
  <WindowContainer componentName={componentName}>
    <WindowTitle>{title}</WindowTitle>
    {children}
  </WindowContainer>
);

export default LaunchpadWindow;