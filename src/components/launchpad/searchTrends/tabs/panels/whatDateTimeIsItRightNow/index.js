import React from 'react';

import InterestByGeography from './interestByGeography';
import InterestOverTime from './interestOverTime';

import { SearchTerm, TabPanelContent } from '../style';

const WhatDateTimeIsItRightNow = ({ searchTerm }) => (
  <>
    <SearchTerm>
      <div>Keyword search ></div>
      <div>{searchTerm}</div>
      <div>
        <a
          href="https://trends.google.com/trends/explore?date=all&geo=US&q=what%20date%20time%20is%20it%20right%20now"
          rel="noopener noreferrer"
          target="_blank"
        >&#10228;</a>
      </div>
    </SearchTerm>
    <TabPanelContent>
      <InterestOverTime />
      <InterestByGeography />
    </TabPanelContent>
  </>
)

export default WhatDateTimeIsItRightNow;