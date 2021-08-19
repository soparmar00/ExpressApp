import { combineReducers } from 'redux';
import User from './userReducer';
import users from './reducer';
import Post from './postReducer';

export default combineReducers({
    users,
    User,
    Post,
})
