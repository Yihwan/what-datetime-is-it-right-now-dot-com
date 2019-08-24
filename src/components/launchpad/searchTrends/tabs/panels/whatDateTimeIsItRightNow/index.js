import React from 'react';

import InterestByGeography from './interestByGeography';
import InterestOverTime from './interestOverTime';

import { SearchTerm, TabPanelContent } from '../style';

const WhatDateTimeIsItRightNow = ({ searchTerm }) => (
  <>
    <SearchTerm>
      <div>Keyword search ></div>
      <div>{searchTerm}</div>
    </SearchTerm>
    <TabPanelContent>
      <InterestOverTime />
      <InterestByGeography />
    </TabPanelContent>
  </>
)

export default WhatDateTimeIsItRightNow;