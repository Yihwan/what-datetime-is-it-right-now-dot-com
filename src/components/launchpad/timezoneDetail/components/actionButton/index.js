import React from 'react';

const ActionButton = ({ loc, removeLoc }) => (
  <button onClick={() => removeLoc(loc)}>X</button>
);

export default ActionButton;