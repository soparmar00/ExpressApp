import { ADD_USER, DELETE_USER, EDIT_USER, SHOW_USER } from "../Action/actions";



const initialState = {
    user: {},
    fetchUser: [],
    setUser: {name: '',
    email: '',
    age: '',
    technology: '',
    company: '',
  },
};

export default function User(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return{
                ...state,
                user: action.payload.user
            }

    case SHOW_USER:
      return {
        ...state,
        fetchUser: action.payload.fetchUser,
      }
    
    case EDIT_USER:
      return {
        ...state,
        setUser: action.payload.setUser,
      }
    
    case DELETE_USER:
      return {
        ...state,
        fetchUser: state.fetchUser.filter((users)=>users._id!== action.payload) 
      }

        default:
            return state
    }
}