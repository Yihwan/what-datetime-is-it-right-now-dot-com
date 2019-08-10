import styled from '@emotion/styled';

export const TimezoneGridContainer = styled.section`
  overflow: scroll;
  grid-column: 3 / 4; 
  grid-row: 1 / 2; 
`;

export const TimezoneGridTable = styled.table`
  td {
    white-space: pre;
  }

  border: 1px solid black;
  table-layout: fixed;
`;