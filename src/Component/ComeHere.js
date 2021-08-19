import React from 'react'
import {  Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ComeHere = () => {

    const history = useHistory()
     
    const handleUser = () => {
        history.push('/user')
    }

    const handlePost = () => {
        history.push('/post')
    }

    return (
        <div>
           <Button variant="success"onClick={() => handleUser()} >User Table</Button> 
           <span></span>
           <span></span>
           <Button variant="primary"onClick={() => handlePost()} >Login User Post</Button> 
        </div>
    )
}

export default ComeHere
