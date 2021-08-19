import axios from 'axios';
import { addPost, addUser, deleteUser, editUser, login, showPost, showUsers, signup } from '../Action/actions';


const request = axios.create({
    baseURL: 'http://localhost:9060',
});

export const signUpUser = (state) => async (dispatch) => {
    console.log(state)
    try{
        // console.log(state)
        const response = await request.post('/signup', state);
        dispatch(signup({users: response.data}))
    }
    catch (err) {
        console.log(err);
    } 
}

export const loginUser = (state) => async (dispatch) => {

    try{
        const response = await request.post('/login', state);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
         console.log(response.data)
         localStorage.setItem('token', response.data.token)
         localStorage.setItem('id', response.data._id)
        dispatch(login({users: response.data, token: response.token}))
    }
    catch (err) {
        console.log(err);
    } 
}

export const addApiUser = (state) => async (dispatch) => {
    console.log(state)
    try{
        const response = await request.post('/adduser', state);
        dispatch(addUser({user: response.data}))
    }
    catch (err) {
        console.log(err);
    } 
}

export const getUser= (state) => async (dispatch, getState) => {
    console.log(state)
     try{
    const response = await request.get('/users');

    dispatch(showUsers({ fetchUser: response.data }))
    }           
    catch (err) {
        console.log(err);
    } 
}

export const edUser= (id,state) => async (dispatch, getState) => {
    console.log(state)
     try{
    const response = await request.put(`/edit/${id}`);

    dispatch(editUser({ fetchUser: response.data }))
    }           
    catch (err) {
        console.log(err);
    } 
}

export const delUser= (id) => async (dispatch) => {
     try{
    const response = await request.delete(`/deleteUser/${id}`);
    
    dispatch(deleteUser(id))
    dispatch(showUsers)
    }
    catch (err) {
        console.log(err);
    } 
}

export const addPosts = (state) => async (dispatch) => {
    console.log(state)
    try{
        const response = await request.post('/addpost', state);
        dispatch(addPost({post: response.data}))
    }
    catch (err) {
        console.log(err);
    } 
}

export const getPost= (state) => async (dispatch, getState) => {
    console.log(state)
     try{
    const response = await request.get('/post');
        console.log(response.data)
    dispatch(showPost({ fetchPost: response.data }))
    }           
    catch (err) {
        console.log(err);
    } 
}
