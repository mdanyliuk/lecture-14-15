import {
  getJson,
  postJson,
  putJson,
} from 'requests';

import config from 'config';

const errorPostPlayer = () => ({
  type: 'ERROR_POST_PLAYER',
});

const errorPutPlayer = () => ({
  type: 'ERROR_PUT_PLAYER',
});

const errorGetPlayer = () => ({
  type: 'ERROR_GET_PLAYER',
});



const successPostPlayer = () => ({
  type: 'SUCCESS_POST_PLAYER',
});

const successPutPlayer = () => ({
  type: 'SUCCESS_PUT_PLAYER',
});

const fetchPostPlayer = ({
  name,
  position,
  clubId,
}) => {
  const {
    BASE_URL,
  } = config;

  return postJson({
    body: {
      name,
      position,
      clubId,
    },
    url: `${BASE_URL}/players`,
  });
};

const successGetPlayer = (payload) => ({
  type: 'SUCCESS_GET_PLAYER',
  payload: payload,
});

const fetchPutPlayer = ({
  id,
  name,
  position,
  clubId,
}) => {
  const {
    BASE_URL,
  } = config;

  return putJson({
    body: {
      name,
      position,
      clubId,
    },
    url: `${BASE_URL}/players/`.concat(id),
  });
};

const getPlayerById = ({
  id,
}) => {
  const {
    BASE_URL,
  } = config;

  return getJson({
    url: `${BASE_URL}/players/`.concat(id),
  });
};

export const fetchSavePlayer = ({
  id,
  name,
  position,
  clubId,
}) => (dispatch) => {
  if (id === '') {
    return fetchPostPlayer({
      name,
      position,
      clubId,
    })
    .then(() => dispatch(successPostPlayer()))
    .catch(() => dispatch(errorPostPlayer()))
  } else {
    return fetchPutPlayer({
      id,
      name,
      position,
      clubId,
    })
    .then(() => dispatch(successPutPlayer()))
    .catch(() => dispatch(errorPutPlayer()))
  }  
};

export const fetchPlayerById = ({
  id,
}) => (dispatch) => {
  return getPlayerById({
    id,
  })
  .then(payload => dispatch(successGetPlayer(payload)))
  .catch(() => dispatch(errorGetPlayer()))
};