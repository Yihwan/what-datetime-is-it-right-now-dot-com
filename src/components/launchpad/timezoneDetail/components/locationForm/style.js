import styled from '@emotion/styled';
import { COLORS, SPACER } from 'src/constants/style';

export const customSelectStyles = {
  container: provided => ({
    ...provided,
    color: COLORS.white,
  }),
  control: provided => ({
    ...provided,
    backgroundColor: COLORS.black,
  }), 
  singleValue: provided => ({
    ...provided, 
    color: COLORS.blooberbOrange,
  }),
  menu: provided => ({
    ...provided, 
    backgroundColor: COLORS.black,
    color: COLORS.white,
    border: `1px solid ${COLORS.greyL1}`,
  }),
  option: (provided, state) => ({
    ...provided, 
    color: state.isSelected ? COLORS.black : COLORS.white,
    backgroundColor: state.isSelected ? COLORS.blooberbOrange : COLORS.black,
  }),
  input: provided => ({
    ...provided, 
    color: COLORS.blooberbOrange,
  }),
  placeholder: provided => ({
    ...provided, 
    color: COLORS.white,
  })

}
export const LocationFormContainer = styled.div`
  padding: ${SPACER.base} ${SPACER.large};
  width: 100%; 
  box-sizing: border-box;
  display: flex; 
  flex-direction: column; 
  justify-content: center;
`;

export const SelectButton = styled.button`
  padding: ${SPACER.small} ${SPACER.base};
  font-size: 0.9rem;
  margin-top: ${SPACER.base};
  background-color: ${COLORS.purple};
  color: ${COLORS.white};
  border: 2px solid ${COLORS.blooberbOrange};

  &:focus {
    outline: ${SPACER.x2small} solid ${COLORS.blooberbOrange};
  }
`;