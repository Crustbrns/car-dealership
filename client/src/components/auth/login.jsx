import React from 'react';
import { Link } from 'react-router-dom';
import classes from './styles/auth.module.css';

const Login = function () {
    return (
        <div className={classes.container}>
            <div className={classes.holder}>
                <h2>Welcome back</h2>
                <h1>Log in your account</h1>
                <h3>Or create a
                    <Link to="/registration" style={{ marginLeft: '4px' }}>
                        <span style={{ color: 'var(--green)' }}>new one</span>
                    </Link>
                </h3>

                <div className={classes.fields}>
                    <input placeholder='Email' />
                    <input style={{marginTop: '20px', animationDuration: '0.3s'}} placeholder='Password' />
                </div>
                <button>Sign In</button>
            </div>
        </div>
    )
}

export default Login;