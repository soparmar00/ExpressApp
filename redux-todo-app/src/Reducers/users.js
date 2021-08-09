import { SHOW_USER, ADD_LOGIN_USER, LOGIN_USER} from '../Action/actions';

const initialState = {
  fatchData: [],
  users:{}
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case SHOW_USER:
      return {
        ...state,
        fatchData: action.payload.records,
      }
          
      case ADD_LOGIN_USER:
        return{
          ...state,
          users: action.payload

        }
      case LOGIN_USER:
        return{
          ...state,
          users: action.payload

        }
      

    default:
      return state
  }
}