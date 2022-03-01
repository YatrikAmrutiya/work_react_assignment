import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn, isloggedOut } from "../actions/action.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import profile from "../assets/images/profile.png"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const logInUser = useSelector((state) => state.loginData);
  const currentUsers = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();
  const [alertItem, setAlertItem] = useState("");
  function onLogin(e) {
    e.preventDefault();
    if (
      logInUser.some((user) => user.email === email && user.pwd === password)
    ) {
      dispatch(isLoggedIn());
      navigate("/");
      console.log(currentUsers);
      return;
    } else {
      setAlertItem(
        <div className="alert alert-danger" role="alert">
          Invalid credentials
        </div>
      );
      dispatch(isloggedOut());
    }
  }
  return (
    <>
      {alertItem}
      <div className="container">
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container pb-2">
              <h2 className="font-weight-bold">Login</h2>
            </div>
            <div className="profile-photo">
              <img src={profile} className="img-fluid" alt="" />
            </div>
            <div className="row clearfix">
              <div className="w-100">
                <form onSubmit={onLogin}>
                  <div className="input_field">
                    <input
                      type="text"
                      name="email"
                      placeholder="Mobile number / Email id"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="d-flex input-mobile"></div>
                  <div className="input_field mb-2">
                    <input
                      type="password"
                      id="password"
                      className="password-controll form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </div>

                  <div className="title forget-link pb-3">
                    <Link to="./forgot.html">Forgot password?</Link>
                  </div>

                  <input className="button" type="submit" value="Login" />

                  <div className="aready-ac mt-2 text-center">
                    <p>
                      Don't have an account?
                      <span>
                        <Link to="/register"> Sign up</Link>
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
