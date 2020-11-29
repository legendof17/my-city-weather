import React from 'react'
import {Nav, NavLink, Bars, NavMenu, Logo} from './NavbarElements'

const Navbar = () => {
    return (
        <Nav>
            <Logo href="https://www.google.com">
                <h1>Logo</h1>    
            </Logo> 
            <Bars />
            <NavLink to="/" activeStyle>
                    <h3>My City Weather</h3> 
                </NavLink>
            <NavMenu>
                <NavLink to="/home" activeStyle>
                    Home
                </NavLink>
            </NavMenu>
        </Nav>
    )
}

export default Navbar
