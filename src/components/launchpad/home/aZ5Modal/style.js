import styled from '@emotion/styled';
import { COLORS, SPACER } from 'src/constants/style';

export const customStyles = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'unset',
    bottom: 'unset',
    transform: 'translate(-50%, -50%)',
    backgroundColor: COLORS.black,
    color: COLORS.white,
    border: `4px solid darkkhaki`,
    borderRadius: 0,
    maxWidth: '600px',
    margin: `auto`,
    padding: 0,
    height: 'auto',
    overflow: 'auto',
  },
  overlay: {
    backgroundColor: `rgba(0, 0, 0, 0.5)`,
    zIndex: 10,
  }
};

export const InnerContainer = styled.div`
  display: flex; 
  flex-direction: column;
`;

export const WarningHeader = styled.div`
  background-color: ${COLORS.red};
  font-size: 1.25rem;
  padding: ${SPACER.xsmall} ${SPACER.base};

  display: flex;
  align-items: center;
  text-align: center;

  > div:nth-of-type(2) {
    margin: 0 ${SPACER.base};
  }
`;

export const WarningIconContainer = styled.div`
  font-size: 1.5rem;
`;

export const ModalContent = styled.div`
  padding: ${SPACER.base};
  font-size: 1.25rem;
  line-height: 1.15;
`;

export const A35ActionContainer = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: ${SPACER.base};
  
  > div:first-of-type {
    margin-top: ${SPACER.base};
    margin-bottom: ${SPACER.small};
  }
`;

export const ActionButton = styled.button`
  margin: ${SPACER.base};
  font-size: 1.5rem;
  padding: ${SPACER.small} ${SPACER.base} 0.75rem;
  background-color: moccasin;
  color: ${COLORS.red};
  border: 2px solid darkkhaki;
`;