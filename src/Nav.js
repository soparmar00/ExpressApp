import { Link } from "react-router-dom";

import React from 'react'
function Nav() {
    return (
        <div>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/come'>Come Here</Link></li>
            </ul>
        </div>
    )
}

export default Nav
