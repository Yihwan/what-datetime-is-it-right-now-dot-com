import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Timestamp from 'src/components/timestamp';
import { COLORS } from 'src/constants/style';

import { TimestampContainer, LaunchpadLinkContainer, Footer } from './style';

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
            &#x2600;&#xFE0E;
          </AniLink>
        </LaunchpadLinkContainer>
        <Timestamp />
      </div>
    </TimestampContainer>
    <Footer>
      Winner (#3),{' '} 
      <a 
        href="https://www.reddit.com/r/ProgrammerHumor/comments/ds7ma6/hackathon_results_winners/"
        rel="noopener noreferrer"
        target="_blank"
      >
        /r/ProgrammerHumor
      </a>{' '}
      "Overengineering" Hackathon 2019
    </Footer>
  </>
);

export default TimestampHome;