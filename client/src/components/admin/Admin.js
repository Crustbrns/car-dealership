import React from 'react';
import { Outlet } from 'react-router';
import Dashboard from './dashboard/dashboard';
import classes from './admin.module.css';

const Admin = function () {
    return (
        <>
            <div className={classes.container + ' flex_between'}>
                <Dashboard />
                <Outlet />
            </div>
        </>
    )
}

export default Admin;