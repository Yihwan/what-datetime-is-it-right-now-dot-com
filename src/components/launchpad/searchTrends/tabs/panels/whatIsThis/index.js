import React from 'react';

import InterestOverTime from './interestOverTime';
import InterestByGeography from './interestByGeography';

import { SearchTerm, TabPanelContent } from '../style';

// https://trends.google.com/trends/explore?date=all&geo=US&q=what%20is%20this
const WhatIsThis = ({ searchTerm }) => (
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

export default WhatIsThis;