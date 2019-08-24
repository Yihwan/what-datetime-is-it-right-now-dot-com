import styled from '@emotion/styled';
import { MEDIA_QUERIES } from 'src/constants/style';

export const AreaChartWrapper = styled.div`
  flex: 1;
  ${MEDIA_QUERIES.mdUp} {
    flex: 2;
  }
`;

