import React from 'react';

import { TileColumnContainer, Title } from './style';

const TileColumn = ({ title, children }) => (
  <TileColumnContainer>
    <Title>{title}</Title>
    {children}
  </TileColumnContainer>
);

export default TileColumn;