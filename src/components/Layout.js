import React from 'react'
import { Link } from 'gatsby'
import './layout.css'
const Layout = ({children}) => {
    return (
        <>
            <nav className="navbar sticky-top navbar-dark">
                <div class="container-fluid">
                    <div className='navbar-link-container ml-auto justify-content-end'>
                        <a className='navbar-link text-light nav-item' href='/'>Home</a>
                        <a className='navbar-link text-light nav-item' href='/routes'>Routes</a>
                        <a className='navbar-link text-light nav-item' href='/about'>About</a>
                    </div>
                </div>
            </nav>
            <main className="content-container">
                {children}
            </main>
        </>
    )
}
export default Layout