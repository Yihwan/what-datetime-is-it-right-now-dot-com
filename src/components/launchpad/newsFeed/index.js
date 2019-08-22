import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ARTICLES from 'src/content/newsFeedExcerpts';
import LaunchpadWindow from 'src/shared-components/launchpadWindow';

import { 
  NewsFeedContainer, 
  BlooberbBar,
  NewsArticle, 
  TimePublished, 
  Title, 
  Source, 
  Excerpt, 
  Bullets,
} from './style';

const NewsFeed = () => (
  <LaunchpadWindow title="Newsfeed" componentName="NewsFeed">
    <NewsFeedContainer>
      <Tabs>
        <TabList>
          <Tab>DATETIME</Tab>
          <Tab>Business</Tab>
          <Tab>World</Tab>
          <Tab>Politics</Tab>
        </TabList>

        <BlooberbBar />

        <TabPanel>
          {ARTICLES['breaking'].sort((a, b) => parseInt(b.timePublished, 10) - parseInt(a.timePublished, 10)).map(article => (
            <NewsArticleComponent article={article}/>
          ))}
        </TabPanel>
        <TabPanel>
          {ARTICLES['business'].sort((a, b) => parseInt(b.timePublished, 10) - parseInt(a.timePublished, 10)).map(article => (
            <NewsArticleComponent article={article} />
          ))}
        </TabPanel>
        <TabPanel>
          {ARTICLES['world'].sort((a, b) => parseInt(b.timePublished, 10) - parseInt(a.timePublished, 10)).map(article => (
            <NewsArticleComponent article={article} />
          ))}
        </TabPanel>
        <TabPanel>
          {ARTICLES['politics'].sort((a, b) => parseInt(b.timePublished, 10) - parseInt(a.timePublished, 10)).map(article => (
            <NewsArticleComponent article={article} />
          ))}
        </TabPanel>
      </Tabs>
    </NewsFeedContainer>
  </LaunchpadWindow>
);

const NewsArticleComponent = ({ article }) => (
  <NewsArticle key={article.srcUrl}>
    <TimePublished>{`${article.timePublished.slice(0, 2)}:${article.timePublished.slice(2, 4)}`}</TimePublished>
    <div>
      <Title>
        {article.title}{' '}
        <Source
          href={article.srcUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          ({article.srcName})
              </Source>
      </Title>
      {article.excerpt && <Excerpt>{article.excerpt}</Excerpt>}
      
      {article.bullets && <Bullets>
        {article.bullets.map(bullet => (
          <li key={bullet}><span>{bullet}</span></li>
        ))}
      </Bullets>}
    </div>
  </NewsArticle>
)

export default NewsFeed;