import React from 'react';
import classes from './pagenotfound.module.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import image from '../../images/pagenotfound.jpeg';

const PageNotFound = function () {
    return (
        <div className={classes.container} >
            <img className={classes.image} src={image} />
            <div className={classes.caution}>
                <p>Ooh no! Error 404</p><span>Page not found! Try to sail somewhere else.</span>
            </div>

            <Link className={classes.button} to="/" end>
                Back to the harbor =)
            </Link>
        </div>
    )
}

export default PageNotFound;