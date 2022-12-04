import React from 'react'
import NavbarLinks from './NavbarLinks'
import "./HeaderNavbar.css"

const HeaderLogo = () => {
    return (
        <div>
            <div className='header-container'>
                <h1>ABC</h1>
                <div >
                    <NavbarLinks />
                </div>
            </div>
        </div>
    )
}

export default HeaderLogo
