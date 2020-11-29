import React from 'react'
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Logo} from './NavbarElements'

const Navbar = () => {
    return (
        <Nav>
            <Logo href="https://www.google.com" className="Logo">
                <h1>LO17</h1>    
            </Logo> 
            <NavLink to="/" activeStyle>
                <h3>MY CITY WEATHER</h3> 
            </NavLink>
            {/* <Bars /> */}
            <NavMenu>
                <NavLink to="/howtouse" activeStyle>
                    Use?
                </NavLink>
            </NavMenu>
            {/* <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
             </NavBtn> */}
            <Logo href="https://www.google.com">
                <h3>GitHub</h3>    
            </Logo>
        </Nav>
    )
}

export default Navbar
