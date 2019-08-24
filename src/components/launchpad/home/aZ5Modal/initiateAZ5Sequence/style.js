import styled from '@emotion/styled';
import { COLORS, SPACER } from 'src/constants/style';

export const AZ5SequenceContainer = styled.div`
  position: fixed; 
  z-index: 100;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${COLORS.black};

  max-width: 600px;
  min-width: 50vw;

  max-height: 90%;
  min-height: 55vh;
  
  > div:first-of-type {
    background-color: ${COLORS.red};
    padding: ${SPACER.xsmall} ${SPACER.small};
  }
  
  > div {
    padding: 0 ${SPACER.small};
  }
`;

export const SkullContainer = styled.div`
  position: fixed;
  z-index: 10;
  top: 0; 
  left: 0;
  height: 100vh; 
  width: 100vw; 
  background-color: ${COLORS.black};

  display: flex; 
  justify-content: center; 
  align-items: center; 

  font-size: 4rem;
`;