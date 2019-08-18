import React from 'react';

import LaunchpadWindow from 'src/shared-components/launchpadWindow';
import Timestamp from 'src/components/timestamp';

import {
  ActionContainer,
  InnerContainer,
  HomeLink,
  CurrentTimeContainer,
  A3Z
} from './style';

const Home = () => (
  <LaunchpadWindow title="What DATETIME Is It Right Now" componentName="Home">
    <ActionContainer>
      <InnerContainer>
        <HomeLink href="/">Go Back</HomeLink>
        <CurrentTimeContainer><Timestamp /></CurrentTimeContainer>
      </InnerContainer>

      <A3Z>A3-Z</A3Z>
    </ActionContainer>
  </LaunchpadWindow>
);

export default Home;
