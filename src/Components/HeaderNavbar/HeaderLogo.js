import React from 'react'
import NavbarLinks from './NavbarLinks'
import "./HeaderNavbar.css"

const HeaderLogo = () => {
    return (
        <div className='header-sticky'>
            <div className='header-container'>
                <h1>ABC</h1>
                <div className='navlinks-sticky' >
                    <NavbarLinks />
                </div>
            </div>
        </div>
    )
}

export default HeaderLogo
