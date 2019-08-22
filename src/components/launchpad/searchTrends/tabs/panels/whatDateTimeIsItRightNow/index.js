import React from 'react';

import InterestOverTime from './interestOverTime';

import { SearchTerm } from '../style';

const WhatDateTimeIsItRightNow = ({ searchTerm }) => (
  <>
    <SearchTerm>
      <div>Keyword search ></div>
      <div>{searchTerm}</div>
    </SearchTerm>
    <InterestOverTime />
  </>
)

export default WhatDateTimeIsItRightNow;