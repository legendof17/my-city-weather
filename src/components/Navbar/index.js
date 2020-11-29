import React from 'react'
import {Nav, NavLink, Bars, NavMenu, Logo} from './NavbarElements'

const Navbar = () => {
    return (
        <Nav>
            <Logo href="https://www.google.com" className="Logo">
                <h1>Logo</h1>    
            </Logo> 
            <Bars />
            <NavLink to="/" activeStyle>
                <h3>My City Weather</h3> 
            </NavLink>
            <NavMenu>
                <NavLink to="/howtouse" activeStyle>
                    Use?
                </NavLink>
            </NavMenu>
            <Logo href="https://www.google.com">
                <h3>GitHub</h3>    
            </Logo>
        </Nav>
    )
}

export default Navbar
