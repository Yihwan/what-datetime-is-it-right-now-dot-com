import styled from '@emotion/styled';

export const NewsVideoContainer = styled.section`
  grid-column: 1 / 2; 
  grid-row: 2 / 3; 

  overflow: hidden; 
  padding-top: 56.25%; 
  position: relative;

  iframe {
   height: 100%;
   left: 0;
   position: absolute;
   top: 0;
   width: 100%;
  }
`;

