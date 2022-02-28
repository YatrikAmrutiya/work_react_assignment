import React, { useState } from "react";

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <div className='container'>
                <div className='form_wrapper'>
                    <div className='form_container'>
                        <div className='title_container pb-2'>
                            <h2 className='font-weight-bold'>Login</h2>
                        </div>
                        <div className='profile-photo'>
                            <img src='./img/profile.png' className='img-fluid' alt="" />
                        </div>
                        <div className='row clearfix'>
                            <div className='w-100'>
                                <form onSubmit=''>
                                    <div className='input_field'>
                                        <input
                                            type='text'
                                            name='email'
                                            placeholder='Mobile number / Email id'
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value)
                                            }}
                                            required
                                        />
                                    </div>
                                    <div className='d-flex input-mobile'></div>
                                    <div className='input_field mb-2'>
                                        <input
                                            type='password'
                                            id='password'
                                            className='password-controll form-control'
                                            placeholder='Password'
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value)
                                            }}
                                        />
                                        <i className='fa fa-eye' aria-hidden='true'></i>
                                    </div>

                                    <div className='title forget-link pb-3'>
                                        <a href='./forgot.html'>Forgot password?</a>
                                    </div>

                                    <input className='button' type='submit' value='Login' />

                                    <div className='aready-ac mt-2 text-center'>
                                        <p>
                                            Don't have an account?
                                            <span>
                                                <a href='./index.html'> Sign up</a>
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
