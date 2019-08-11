import React from 'react';

import EXCERPTS from 'src/content/newsFeedExcerpts';

import { 
  NewsFeedContainer, NewsArticle, DatePublished, Title, Excerpt
} from './style';

const NewsFeed = () => (
  <NewsFeedContainer>
    {EXCERPTS.map(excerpt => (
      <NewsArticle>
        <DatePublished>{excerpt.datePublished}</DatePublished>
        <Title>{excerpt.title}</Title>
        <Excerpt>{excerpt.excerpt}</Excerpt>
      </NewsArticle>
    ))}
  </NewsFeedContainer>
);

export default NewsFeed;