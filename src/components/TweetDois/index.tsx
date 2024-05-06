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
  ImageContentDois,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet2: React.FC = () => {
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
            <strong>Peter Jordan</strong>
            <span>@peterjordan</span>
            <Dot />
            <time>04 de mai</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>É BOM PRA CARAMBA!</Description>

          <ImageContentDois />
          
          <Icons>
            <Status>
              <CommentIcon />
              242
            </Status>
            <Status>
              <RetweetIcon />
               123
            </Status>
            <Status>
              <LikeIcon />
              897
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
    
  );
};



export default Tweet2;
