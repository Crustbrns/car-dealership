import React from 'react';
import classes from './cart.module.css'

const Cart = function () {

    function alarm() {
    }

    return (
        <div className={classes.test}>
            <span onClick={alarm}>Click me</span>
        </div>
    )
}

export default Cart;