const initialState = {
  players: [],
  refresh: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case 'RECEIVE_PLAYERSLIST': 
      return {
        ...state,
        players: payload};
    case 'SUCCESS_DELETE_PLAYER':
      return {
        ...state,
        refresh: true};
    case 'REQUEST_DELETE_PLAYER':
      return {
        ...state,
        refresh: false};
    case 'ERROR_RECEIVE_PLAYERSLIST': 
    case 'ERROR_DELETE_PLAYER':       
    case 'REQUEST_PLAYERSLIST':
    default:   {
      return {
        ...state,
      };
    }
  }  
}