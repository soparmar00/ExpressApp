import { LOG_IN, SIGN_UP } from "../Action/actions";


const initialState = {
    users: {},
    token: localStorage.getItem("token"),
};




export default function users(state = initialState, action) {
    
    switch (action.type) {
        case SIGN_UP:
            return{
                ...state,
                users: action.payload.users
            }
        
        case LOG_IN:
            return{
                ...state,
                users: action.payload.users
   
            }
        

        default:    
            return state
    }
}