
export const SHOW_USER = 'SHOW_USER';
export const ADD_USER = 'ADD_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const ADD_LOGIN_USER = 'ADD_LOGIN_USER';

export const showUsers = (payload) => ({ 
    type: SHOW_USER, 
    payload 
});


export const addLoginUser = (payload)=> ({
    type:ADD_LOGIN_USER,
    payload,
})

export const loginUser = (payload) => ({
    type:LOGIN_USER,
    payload,
    
})

