import { ADD_TASK, DELETE_TASK, FILTER_BY_DATE, SHOW_TASK } from "../Action/actions";

const initialState = {
    task: {},
    fetchTask: [],
    
}

export default function Task(state = initialState, action) {
    switch(action.type){
        case ADD_TASK:
            return{
                ...state,
                task: action.payload.task,
            }
        case SHOW_TASK:
            return{
                ...state,
                fetchTask: action.payload.fetchTask
            }
        case DELETE_TASK:
            return {
                ...state,
                fetchTask:  state.users.filter((tasks) => tasks.id !== action.payload)
        }
        case FILTER_BY_DATE:
            return{
                ...state,
                fetchTask: action.payload.fetchTask
            }

        default:
            return state
    }
}