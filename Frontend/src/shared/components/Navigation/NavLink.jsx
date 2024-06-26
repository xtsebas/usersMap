import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import './navlinks.css'

const NavLinks = props => {
    return(
        <ul className="nav-links">
            <li>
                <NavLink to='/' exact>ALL USERS</NavLink>
            </li>
            <li>
                <NavLink to='/:userId/places'>MY PLACES</NavLink>
            </li>
            <li>
                <NavLink to='/places/new'>ADD PLACES</NavLink>
            </li>
            <li>
                <NavLink to='/auth'>AUTHENTICATE</NavLink>
            </li>
        </ul>
    )
}
export default NavLinks