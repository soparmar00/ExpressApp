import { Link } from "react-router-dom";

import React from 'react'
function Nav() {
    return (
        <div>
            <ul>
                <li><Link to = '/users'>Show Users</Link></li>
                <li><Link to = '/login'>login</Link></li>
            </ul>
        </div>
    )
}

export default Nav 
