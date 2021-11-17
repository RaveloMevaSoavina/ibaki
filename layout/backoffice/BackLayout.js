import React from 'react'
import Navbar from './Topbar/Topbar'
import SideNavigation from './SideNavigation/SideNavigation'

function BackLayout({children}) {
    return (
        <React.Fragment>
            <Navbar/>
            <div style={{display : "flex"}}>
                <SideNavigation/>
                {children}
            </div>
        </React.Fragment>
    )
}

export default BackLayout
