import React from 'react';
import PageAccessValidator from 'components/PageAccessValidator';
import PlayerPage from 'pages/Player';
import PageContainer from 'components/PageContainer';

const Player = () => (
  <PageAccessValidator>
    <PageContainer>
      <PlayerPage />
    </PageContainer>
  </PageAccessValidator>
);

export default Player;