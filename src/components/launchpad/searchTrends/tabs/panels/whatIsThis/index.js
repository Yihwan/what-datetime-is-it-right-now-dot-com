import React from 'react';

import InterestOverTime from './interestOverTime';
import InterestByGeography from './interestByGeography';

import { SearchTerm, TabPanelContent } from '../style';

const WhatIsThis = ({ searchTerm }) => (
  <>
    <SearchTerm>
      <div>Keyword search ></div>
      <div>{searchTerm}</div>
      <div>
        <a
          href="https://trends.google.com/trends/explore?date=all&geo=US&q=what%20is%20this"
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

export default WhatIsThis;