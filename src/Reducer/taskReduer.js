import { ADD_TASK, DATE, DELETE_TASK, SHOW_TASK } from "../Action/actions";

const initialState = {
    task: {},
    fetchTask: [],
    seDate: {},
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
        case DATE:
            return{
                ...state,
                seDate: action.payload.seDate
            }

        default:
            return state
    }
}