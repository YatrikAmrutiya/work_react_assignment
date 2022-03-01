import React from "react";
import { isloggedOut } from "../actions/action.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"
function Header() {
  const validUser = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(isloggedOut());
  };
  return (
    <div>
      <header className="header">
        <div className="d-block  d-desk-none  margin-center pt-3">
          <Link to="register" className="btn btn-primary">
            Sign up
          </Link>
          <Link to="login" className="btn btn-secondary">
            Login
          </Link>
        </div>
        <nav className="nav">
          <div className="nav-wrapper">
            <div className="nav-header">
              <Link to="index.html" className="navbar-brand header-logo">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="search-box">
              <input
                type="text"
                className="search-input"
                placeholder="Search.."
              />
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
              <div className="nav-link">
                <div className=" dropdown">
                  <Link
                    className=" dropdown-toggle"
                    to="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Artplace
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <Link className="dropdown-item" to="#">
                      Artworks
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Artist
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Galleries
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Art fairs
                    </Link>
                  </div>
                </div>
                <Link to="myart.html">My Art</Link>
                <div className="d-none d-desk-block">
                  {validUser.login ? (
                    <Link
                      to="login"
                      onClick={logOut}
                      className="btn btn-secondary"
                    >
                      Logout
                    </Link>
                  ) : (
                    <>
                      <Link to="register" className="btn btn-primary">
                        Sign up
                      </Link>
                      <Link to="login" className="btn btn-secondary">
                        Login
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
