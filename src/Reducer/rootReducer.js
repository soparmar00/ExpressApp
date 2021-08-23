import { combineReducers } from 'redux';
import User from './userReducer';
import users from './reducer';
import Post from './postReducer';
import Task from './taskReduer';

export default combineReducers({
    users,
    User,
    Post,
    Task,
})
