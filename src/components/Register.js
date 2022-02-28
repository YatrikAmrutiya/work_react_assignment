import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterAction } from "../actions/action";

function Register() {
    const [user, setUser] = useState({});
    const handleFirstNameInputChange = (event) => {
        setUser((values) => ({
            ...values,
            firstName: event.target.value,
        }));
    };

    const handleLastNameInputChange = (event) => {
        setUser((values) => ({
            ...values,
            lastName: event.target.value,
        }));
    };

    const handleEmailInputChange = (event) => {
        setUser((values) => ({
            ...values,
            email: event.target.value,
        }));
    };

    const handlePhInputChange = (event) => {
        setUser((values) => ({
            ...values,
            phno: event.target.value,
        }));
    };

    const handlePasswordInputChange = (event) => {
        setUser((values) => ({
            ...values,
            password: event.target.value,
        }));
        console.log(user);
    };

    const dispatch = useDispatch();
    const User = useSelector((state) => state.User);
    const { users } = User;
    function onSignUp(e) {
        e.preventDefault();
        dispatch(RegisterAction(user));
    }


    return (
        <>
            {users && alert("registered")}
            <div className='container'>
                <div className='form_wrapper'>
                    <div className='form_container'>
                        <div className='title_container pb-2'>
                            <h2 className='font-weight-bold'>Sign up</h2>
                        </div>
                        <div className='profile-photo'>
                            <img src='./img/profile.png' className='img-fluid' alt='' />
                        </div>
                        <div className='row clearfix'>
                            <div className=''>
                                <form onSubmit={onSignUp}>
                                    <div className='row clearfix'>
                                        <div className='col_half'>
                                            <div className='input_field'>
                                                <input
                                                    type='text'
                                                    name='name'
                                                    placeholder='First Name'
                                                    value={user.firstname}
                                                    onChange={handleFirstNameInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className='col_half'>
                                            <div className='input_field'>
                                                <input
                                                    type='text'
                                                    name='name'
                                                    placeholder='Last Name'
                                                    value={user.lastname}
                                                    onChange={handleLastNameInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='input_field'>
                                        <input
                                            type='email'
                                            name='email'
                                            placeholder='Email id'
                                            value={user.email}
                                            onChange={handleEmailInputChange}
                                            required
                                        />
                                    </div>
                                    <div className='d-flex input-mobile'>
                                        <div className='input_field mobile-code position-relative'>
                                            {/* <input type="text" name="email" placeholder="Mobile Number (Optional)" required />  */}
                                            <select className='custom-selects'>
                                                <option value=''>+91</option>
                                                <option value=''>+1</option>
                                                <option value=''>+63</option>
                                                <option value=''>+92</option>
                                            </select>
                                            <i
                                                className='fa fa-angle-down arrow-down'
                                                aria-hidden='true'
                                            ></i>
                                        </div>
                                        <div className='input_field mobile-num'>
                                            <input
                                                type='text'
                                                name='ph'
                                                placeholder='Mobile Number (Optional)'
                                                value={user.phno}
                                                onChange={handlePhInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className='input_field'>
                                        <input
                                            type='password'
                                            id='password'
                                            className='password-controll form-control'
                                            placeholder='Password'
                                            value={user.password}
                                            onChange={handlePasswordInputChange}
                                        />
                                        <i className='toggle-password fa fa-fw fa-eye-slash'></i>
                                    </div>
                                    <div className='input_field'>
                                        <input
                                            type='password'
                                            id='password'
                                            className='password-controll form-control'
                                            placeholder='Confirm Password'
                                        />
                                        <i className='toggle-password fa fa-fw fa-eye-slash'></i>
                                    </div>

                                    <div className='input_field checkbox_option'>
                                        <input type='checkbox' id='cb1' />
                                        <label for='cb1' className='d-flex align-items-center'>
                                            <p className='mb-0'>
                                                I agrees to
                                                <a href='#' className='ml-1'>
                                                    Terms and conditions
                                                </a>
                                            </p>
                                        </label>
                                    </div>

                                    <input className='button' type='submit' value='Register' />

                                    <div className='aready-ac mt-2 text-center'>
                                        <p>
                                            Already have an account?
                                            <span>
                                                <a href='./login.html'> Login</a>
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

export default Register;
