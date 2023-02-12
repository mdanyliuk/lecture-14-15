const initialState = {
  id: '',
  name: '',
  position: '',
  club: '1',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_STATE_ID': {
      return {
        ...state,
        id: action.id,
      }
    }
    case 'CHANGE_STATE_NAME': {
      return {
        ...state,
        name: action.name,
      }
    }
    case 'CHANGE_STATE_POSITION': {
      return {
        ...state,
        position: action.position,
      }
    }
    case 'CHANGE_STATE_CLUB': {
      return {
        ...state,
        club: action.club,
      }
    }
    case 'SUCCESS_GET_PLAYER': {
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        position: action.payload.position,
        club: action.payload.clubName === 'Bologna' ? '2' : action.payload.clubName === 'Cremonese' ? '3' : '1',
      }
    }
    case 'CLEAR_STATE': {
      return {
        ...state,
        id: '',
        name: '',
        position: '',
        club: '1',
      }
    }
    case 'ERROR_PUT_PLAYER': 
    case 'ERROR_POST_PLAYER':
    default:   {
      return {
        ...state,
      };
    }
  }  
}