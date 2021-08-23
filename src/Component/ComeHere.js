import React from 'react'
import {  Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../Action/actions';

const ComeHere = () => {

    const history = useHistory()
    const token = useSelector(state => state.users)
    const dispatch = useDispatch()
     
    const handleUser = () => {
        history.push('/user')
    }

    const handlePost = () => {
        history.push('/post')
    }

    const handleTask = () =>{
        history.push('/task')
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        dispatch(logout())
    } 

    return (
        <div>
            {token &&(<Button variant="success"onClick={()=> handleLogout()} >Logout</Button>)}
            <br />
            <br />
            <p>User Table:
            <br />
            <span><Button variant="success"onClick={() => handleUser()} >User Table</Button> </span>
            </p>
            <br />
            <br />
            <p>Login User Post: 
            <br />
            <span><Button variant="primary"onClick={() => handlePost()} >Login User Post</Button> </span>
            </p>
            <br />
            <br />
            <p> Task :
            <br />
            <span><Button variant="primary"onClick={() => handleTask()} >Task</Button> </span> 
            </p>
           
           
        </div>
    )
}

export default ComeHere
