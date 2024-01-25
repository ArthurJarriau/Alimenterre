import React from 'react'
import Navbar from './Navbar'

const Layout = props => {

    return <div className="">
        <Navbar />
        <main>

            {props.children}

        </main>
    </div>
}

export default Layout