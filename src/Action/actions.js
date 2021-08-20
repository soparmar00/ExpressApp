export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const ADD_USER = 'ADD_USER';
export const SHOW_USER = 'SHOW_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';
export const ADD_POST = 'ADD_POST';
export const SHOW_POST = 'SHOW_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_TASK = 'ADD_TASK';
export const SHOW_TASK = 'SHOW_TASK';
export const DELETE_TASK = 'DELETE_TASK'

export const signup = (name, email, city, password) => ({
    type: SIGN_UP,
    name, 
    email, 
    city,
    password
});

export const login = (payload) => {
    console.log(payload.token)
    return{
    type: LOG_IN,
    payload
    }
}

export const addUser = (payload) => ({
    type: LOG_IN,
    payload
})

export const showUsers = (payload) => ({ 
    type: SHOW_USER, 
    payload 
});

export const editUser = (id) => ({ 
    type: EDIT_USER, 
    payload: id, 
});

export const deleteUser = (id) => ({ 
    type: DELETE_USER, 
    id, 
});

export const addPost = (payload) => ({
    type: ADD_POST,
    payload
})

export const showPost = (payload) => ({ 
    type: SHOW_POST, 
    payload 
});

export const addComment = (payload) => ({
    type: ADD_POST,
    payload
})

export const addTask = (payload) => ({
    type: ADD_TASK,
    payload
})

export const showTask = (payload) => ({
    type: SHOW_TASK,
    payload
})

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id,
})