import React from 'react';

import TimestampHome from 'src/components/timestampHome';
import SEO from 'src/components/seo';

const IndexPage = () => (
  <>
    <SEO
      title="What Datetime Is It Right Now"
      description="A site that tells you what date and time it is right now."
    />
    <TimestampHome />
  </>
);

export default IndexPage; 
