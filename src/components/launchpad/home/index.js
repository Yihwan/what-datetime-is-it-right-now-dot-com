import React from 'react';

import LaunchpadWindow from 'src/shared-components/launchpadWindow';

import {
  ActionContainer,
  InnerContainer,
  HomeLink,
  CurrentTimeContainer,
  A3Z
} from './style';

const Home = () => (
  <LaunchpadWindow title="What DATETIME Is It Right Now">
    <ActionContainer>
      <InnerContainer>
        <HomeLink href="/">Go Back</HomeLink>
        <CurrentTimeContainer>Monday, Something 12:34 PM</CurrentTimeContainer>
      </InnerContainer>

      <A3Z>A3-Z</A3Z>
    </ActionContainer>
  </LaunchpadWindow>
);

export default Home;
