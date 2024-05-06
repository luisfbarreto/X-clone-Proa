import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Luis Barreto</h1>
        <h2>@luisf_br</h2>

        <p>
          Developer at <a target='blank' href="https://www.linkedin.com/in/luisf-barreto/">@LuisFBarreto</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 13 de Janeiro de 2077
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>235</strong>
          </span>
          <span>
            <strong>1,5mil </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
