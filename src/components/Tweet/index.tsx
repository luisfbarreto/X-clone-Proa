import React from 'react';


import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetIcon />
        Você repostou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Sigma Gabriel</strong>
            <span>@EuSouSigma</span>
            <Dot />
            <time>06 de mai</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>Meus Amores😍💗</Description>

          <ImageContent />
          
          <Icons>
            <Status>
              <CommentIcon />
              22
            </Status>
            <Status>
              <RetweetIcon />
               33
            </Status>
            <Status>
              <LikeIcon />
              569
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
    
  );
};


export default Tweet;
