import React from 'react'

function Header() {
    return (
        <div>
            <header className="header">
                <div className="d-block  d-desk-none  margin-center pt-3">
                    <a href="register" className="btn btn-primary">Sign up</a>
                    <a href="login" className="btn btn-secondary">Login</a>
                </div>
                <nav className="nav">
                    <div className="nav-wrapper">
                        <div className="nav-header">
                            <a href="index.html" className="navbar-brand header-logo">
                                <img src="./img/logo.png" alt='' />
                            </a>
                        </div>
                        <div className="search-box">
                            <input type="text" className="search-input" placeholder="Search.." />
                            <button className="search-button">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="nav-menu">
                            <div className="nav-button">
                                <label for="nav-check">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </label>
                            </div>
                            <input type="checkbox" id="nav-check" />
                            <div className="nav-link"><div className=" dropdown">
                                <a className=" dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Artplace
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Artworks</a>
                                    <a className="dropdown-item" href="#">Artist</a>
                                    <a className="dropdown-item" href="#">Galleries
                                    </a>
                                    <a className="dropdown-item" href="#">Art fairs
                                    </a>
                                </div>
                            </div>
                                <a href="myart.html">My Art</a>
                                <div className="d-none d-desk-block">
                                    <a href="register" className="btn btn-primary">Sign up</a>
                                    <a href="login" className="btn btn-secondary">Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header></div>
    )
}

export default Header