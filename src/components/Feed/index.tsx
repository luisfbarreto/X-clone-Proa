import React from 'react';

import Tweet from '../Tweet';
import Tweet2 from '../TweetDois'
import Tweet3 from '../TweetTres'

import { Container, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <Tweet />
        <Tweet2 />
        <Tweet3 />
      </Tweets>
    </Container>
  );
};

export default Feed;
