import React from 'react';

import InterestOverTime from './interestOverTime';
import InterestByGeography from './interestByGeography';

import { SearchTerm, TabPanelContent } from '../style';

const WhereAmIRightNow = ({ searchTerm }) => (
  <>
    <SearchTerm>
      <div>Keyword search ></div>
      <div>{searchTerm}</div>
      <div>
        <a
          href="https://trends.google.com/trends/explore?date=all&geo=US&q=where%20am%20i%20right%20now"
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

export default WhereAmIRightNow;