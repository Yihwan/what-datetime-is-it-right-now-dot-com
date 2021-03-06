import React from 'react';

import LaunchpadWindow from 'src/shared-components/launchpadWindow';

import { GridHelper, NewsVideoContainer } from './style';

const NewsVideo = () => {
  return(
    <GridHelper>
      <LaunchpadWindow title="News Video">
        <NewsVideoContainer>
          <iframe 
            title="news anchor sits in silence"
            src="https://www.youtube-nocookie.com/embed/ZbIEGcvORzQ?start=57&end=250&modestbranding=1&fs=1&loop=1&playlist=ZbIEGcvORzQ&mute=1&autoplay=1" 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </NewsVideoContainer>
      </LaunchpadWindow>
    </GridHelper>
  );
}

export default NewsVideo; 