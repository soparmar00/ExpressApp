import { ADD_COMMENT, ADD_POST, SHOW_POST } from "../Action/actions";

const initialState = {
    post: {},
    fetchPost: [],
    _id: localStorage.getItem("id"),
    comment: {},
}

export default function Post(state = initialState, action) {
    switch(action.type){
        case ADD_POST:
        return{
            ...state,
            post: action.payload.post,
        }

        case SHOW_POST:
      return {
        ...state,
        fetchPost: action.payload.fetchPost,
      }

      case ADD_COMMENT:
        return{
          ...state,
          comment: action.payload.comment,
        }
        default:
            return state
    }
}