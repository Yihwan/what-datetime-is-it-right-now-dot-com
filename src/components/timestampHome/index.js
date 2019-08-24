import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Timestamp from 'src/components/timestamp';
import { COLORS } from 'src/constants/style';

import { TimestampContainer, LaunchpadLinkContainer } from './style';

const TimestampHome = () => (
  <>
    <TimestampContainer>
      <div>
      <LaunchpadLinkContainer title="Expert Mode">
        <AniLink 
          to="/expert"
          cover 
          duration={2}
          bg={COLORS.black}
        >
          ☀
        </AniLink>
      </LaunchpadLinkContainer>
      <Timestamp />
      </div>
    </TimestampContainer>
  </>
);

export default TimestampHome;