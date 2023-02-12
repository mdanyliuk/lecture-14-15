import {
  deleteQuery,
  getJson,
  postJson,
} from 'requests';

import config from 'config';

const errorReceivePlayersList = () => ({
  type: 'ERROR_RECEIVE_PLAYERSLIST',
});

const errorDeletePlayer = () => ({
  type: 'ERROR_DELETE_PLAYER',
});

const getPlayersList = () => {
  const {
    BASE_URL,
  } = config;

  return getJson({
    url: `${BASE_URL}/players`,
  });
};

const deletePlayer = (id) => {
  const {
    BASE_URL,
  } = config;
  return deleteQuery({
    url: `${BASE_URL}/players/`.concat(id),
  });
};

const receivePlayersList = (playersList) => ({
  type: 'RECEIVE_PLAYERSLIST',
  payload: playersList,
});

const requestPlayersList = () => ({
  type: 'REQUEST_PLAYERSLIST',
});

const requestDeletePlayer = () => ({
  type: 'REQUEST_DELETE_PLAYER',
});

const successDeletePlayer = () => ({
  type: 'SUCCESS_DELETE_PLAYER',
});

export const fetchPlayersList = () => (dispatch) => {
  dispatch(requestPlayersList());
    return getPlayersList({
      dispatch,
    }).then(playersList => dispatch(receivePlayersList(playersList)))
      .catch(() => dispatch(errorReceivePlayersList()));
  
};

export const fetchDeletePlayerById = (id) => (dispatch) => {
  dispatch(requestDeletePlayer());
    return deletePlayer(id, {
      dispatch,
    })
    .then(() => dispatch(successDeletePlayer()))
    .catch(() => dispatch(errorDeletePlayer()));  
};