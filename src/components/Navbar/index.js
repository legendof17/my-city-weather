import React from 'react'
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Logo, Git} from './NavbarElements'

const Navbar = () => {
    return (
        <Nav>
            <Logo href="https://github.com/legendof17" className="Logo">
                <h1>LO17</h1>    
            </Logo> 
            <NavLink to="/" activeStyle>
                <h3>MY CITY WEATHER</h3> 
            </NavLink>
            {/* <Bars /> */}
            <NavMenu>
                <NavLink to="/weather" activeStyle>
                    Weather?
                </NavLink>
            </NavMenu>
            {/* <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
             </NavBtn> */}
            <Git href="https://github.com/legendof17/my-city-weather">
                <h3>GitHub</h3>    
            </Git>
        </Nav>
    )
}

export default Navbar
