import React from 'react';

import Launchpad from 'src/components/launchpad';
import SEO from 'src/components/seo';

const ExpertPage = () => (
  <>
    <SEO 
      title="Expert Mode - What Datetime Is It Right Now"
      description="A site that tells you what date and time it is right now - for experts."
    />
    <Launchpad />
  </>
);

export default ExpertPage; 
