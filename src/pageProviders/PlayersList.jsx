import React from 'react';
import PageAccessValidator from 'components/PageAccessValidator';
import PlayersListPage from 'pages/PlayersList';
import PageContainer from 'components/PageContainer';

const PlayersList = () => (
  <PageAccessValidator>
    <PageContainer>
      <PlayersListPage />
    </PageContainer>
  </PageAccessValidator>
);

export default PlayersList;