import React from 'react';

import { TileColumnContainer, Title } from './style';

const TileColumn = ({ title, children }) => (
  <TileColumnContainer>
    <Title>{title} <div>&#8595;</div></Title>
    {children}
  </TileColumnContainer>
);

export default TileColumn;