import React from 'react';
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

import classes from '../../../styles/components/admin/dashboard/dashboard.module.css';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';

const Dashboard = function () {
    return (
        <div className={classes.dashboard_nav}>
            <ul className={classes.dashboard_nav__links}>
                <NavLink to="/admin/dashboard/" className={({ isActive }) => isActive ? classes.dashboard_link_active : classes.dashboard_link} title="Dashboard" end>
                    <li className={classes.dashboard_nav__item}>
                        <GridViewRoundedIcon sx={{ fontSize: 20}} className={classes.dashboard_nav__item__icon}/>
                        <span className={classes.dashboard_nav__item_fullname}>Dashboard</span>
                    </li>
                </NavLink>

                <NavLink to="/admin/dashboard/goods" className={({ isActive }) => isActive ? classes.dashboard_link_active : classes.dashboard_link} title="Goods" end>
                    <li className={classes.dashboard_nav__item}>
                        <Inventory2OutlinedIcon sx={{ fontSize: 20}} className={classes.dashboard_nav__item__icon}/>
                        <span className={classes.dashboard_nav__item_fullname}>Goods</span>
                    </li>
                </NavLink>

                <NavLink to="/admin/dashboard/orders" className={({ isActive }) => isActive ? classes.dashboard_link_active : classes.dashboard_link} title="Orders" end>
                    <li className={classes.dashboard_nav__item}>
                        <InsertInvitationRoundedIcon sx={{ fontSize: 20}} className={classes.dashboard_nav__item__icon}/>
                        <span className={classes.dashboard_nav__item_fullname}>Orders</span>
                    </li>
                </NavLink>

                <NavLink to="/admin/dashboard/customers" className={({ isActive }) => isActive ? classes.dashboard_link_active : classes.dashboard_link} title="Customers" end>
                    <li className={classes.dashboard_nav__item}>
                        <PermIdentityRoundedIcon sx={{ fontSize: 20}} className={classes.dashboard_nav__item__icon}/>
                        <span className={classes.dashboard_nav__item_fullname}>Customers</span>
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}

export default Dashboard;