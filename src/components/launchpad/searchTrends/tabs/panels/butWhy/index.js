import React from 'react';

import InterestOverTime from './interestOverTime';

import { SearchTerm } from '../style';
// TODO-YK: Add link, optionally make shared component.
const ButWhy = ({ searchTerm }) => (
  <>
    <SearchTerm>
      <div>Keyword search ></div>
      <div>{searchTerm}</div>
    </SearchTerm>
    <InterestOverTime />
  </>
)

export default ButWhy;