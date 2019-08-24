import React from 'react';

import InterestOverTime from './interestOverTime';
import InterestByGeography from './interestByGeography';

import { SearchTerm, TabPanelContent } from '../style';

const WhereAmIRightNow = ({ searchTerm }) => (
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

export default WhereAmIRightNow;