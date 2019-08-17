import React from 'react';

import { 
  TileButton,
  Title,
  Value,
} from './style';

const DISPLAY_VALUES = {
  locale: (date, datetimeKey) => date.toLocaleDateString(datetimeKey, { weekday: 'long'}),
  numberSystem: (date, datetimeKey) => date.toLocaleDateString(`en-us-u-nu-${datetimeKey}`, { year: 'numeric', month: 'numeric', day: 'numeric' }),
  calendar: (date, datetimeKey) => date.toLocaleDateString(`en-us-u-ca-${datetimeKey}`, { year: 'numeric', month: 'long' }),
  hourCycle: (date, datetimeKey) => date.toLocaleDateString(`en-us-u-hc-${datetimeKey}`, { timeStyle: 'medium' }),
}

const options = { weekday: 'long' };

const Tile = ({ type, datetimeKey, value, handleClick, isSelected, date }) => (
    <TileButton isSelected={isSelected} onClick={() => handleClick(type, datetimeKey)}>
      <Title>{value}</Title>
    <Value>{DISPLAY_VALUES[type] && DISPLAY_VALUES[type](date, datetimeKey)}</Value>
    </TileButton>
  );

export default Tile; 