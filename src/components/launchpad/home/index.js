import React, { useState } from 'react';
import Modal from 'react-modal';

import LaunchpadWindow from 'src/shared-components/launchpadWindow';
import Timestamp from 'src/components/timestamp';

import AZ5Modal from './aZ5Modal';
import {
  ActionContainer,
  InnerContainer,
  HomeLink,
  CurrentTimeContainer,
  AZ5Button
} from './style';

const Home = ({ activateAZ5 }) => {
  const [isModalOpen, toggleModalOpen] = useState(false);

  return(
    <LaunchpadWindow title="What DATETIME Is It Right Now" componentName="Home">
      <ActionContainer>
        <InnerContainer>
          <HomeLink href="/">Go Back</HomeLink>
          <CurrentTimeContainer><Timestamp /></CurrentTimeContainer>
        </InnerContainer>

        <AZ5Button onClick={() => toggleModalOpen(true)}>АЗ-5</AZ5Button>
        <AZ5Modal 
          isModalOpen={isModalOpen} 
          toggleModalOpen={toggleModalOpen}
          activateAZ5={activateAZ5}
        />
      </ActionContainer>

    </LaunchpadWindow>
  );
}

export default Home;
