import React from 'react';

import EXCERPTS from 'src/content/newsFeedExcerpts';
import LaunchpadWindow from 'src/shared-components/launchpadWindow';

import { 
  NewsFeedContainer, NewsArticle, DatePublished, Title, Excerpt
} from './style';

const NewsFeed = () => (
  <LaunchpadWindow title="Newsfeed" componentName="NewsFeed">
    <NewsFeedContainer>
      {EXCERPTS.map(excerpt => (
        <NewsArticle>
          <DatePublished>{excerpt.datePublished}</DatePublished>
          <Title>{excerpt.title}</Title>
          <Excerpt>{excerpt.excerpt}</Excerpt>
          <DatePublished>{excerpt.datePublished}</DatePublished>
          <Title>{excerpt.title}</Title>
          <Excerpt>{excerpt.excerpt}</Excerpt>
        </NewsArticle>
      ))}
    </NewsFeedContainer>
  </LaunchpadWindow>
);

export default NewsFeed;