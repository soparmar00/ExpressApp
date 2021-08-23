import { Link } from "react-router-dom";
import React from 'react'
import { useSelector, useDispatch } from "react-redux";




function Nav() {

    const token = useSelector(state => state.users)
    
    
    
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                {!token &&(<li><Link to='/login'>Login</Link></li>)}
                <li><Link to='/come'>Come Here</Link></li>
            </ul>
             
        </div>
    )
}

export default Nav
