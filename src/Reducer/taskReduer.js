import { ADD_TASK, DELETE_TASK, SHOW_TASK } from "../Action/actions";

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
        return {...state,
        fetchTask:  state.users.filter((tasks) => tasks.id !== action.payload)
    }
        default:
            return state
    }
}