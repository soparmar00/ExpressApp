import axios from 'axios';
import {addLoginUser, showUsers, loginUser} from './Action/actions';

const request = axios.create({
  baseURL: 'http://localhost:9080',
});

export const getUser= () => async (dispatch, getState) => {

    const response = await request.get('/users');
    dispatch(showUsers({ records: response.data }));
}
  
export const postLoginUser = () => async (dispatch, getState) => {
     const response = await request.post('/signup');
     dispatch(addLoginUser({ records: response.data }));
}

export const LoginUser = () => async (dispatch, getState) => {
     const response = await request.post('/login');
     dispatch(loginUser({ records: response.data }));
}



