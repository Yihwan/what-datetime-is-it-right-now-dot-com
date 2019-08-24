import React from 'react';

import { Button } from './style';

const ActionButton = ({ loc, removeLoc }) => (
  <Button onClick={() => removeLoc(loc)}>&#10754;</Button>
);

export default ActionButton;