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
  ImageContentTres,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet3: React.FC = () => {
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
            <strong>Moedas</strong>
            <span>@chico</span>
            <Dot />
            <time>01 de mai</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>Eu tentei...</Description>

          <ImageContentTres />
          
          <Icons>
            <Status>
              <CommentIcon />
              323
            </Status>
            <Status>
              <RetweetIcon />
               101
            </Status>
            <Status>
              <LikeIcon />
              509
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
    
  );
};



export default Tweet3;
