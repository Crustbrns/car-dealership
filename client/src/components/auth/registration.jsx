import React from 'react';
import { Link } from 'react-router-dom';
import * as EmailValidator from 'email-validator';
import validate from './Processing/validation/PassValidator';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { passwordStrength } from 'check-password-strength'

import classes from './styles/auth.module.css';
import './styles/auth.transitions.css';
import validateField from './Processing/validation/FieldsValidator';
import { getStrength } from './Processing/additional';
import { createAccount, UserData } from './Processing/api/auth';
import Confirmation from './components/confirmation';

const Registration = function () {
    const [active, setActive] = React.useState(true);
    const [userData, setUserData] = React.useState(new UserData());
    const [confirmation, setConfirmation] = React.useState(false);

    const [fNameErrors, setFNameErrors] = React.useState([]);
    const [lNameErrors, setLNameErrors] = React.useState([]);
    const [passErrors, setPassErrors] = React.useState([]);
    const [mailErrors, setMailErrors] = React.useState([]);
    const [passStrength, setPassStrength] = React.useState(undefined);

    function checkAvailability(element) {
        console.log(element.target.value);
        if (element.target.id === 'fname') {
            let passErrors = [];

            let res = validateField(element.target.value);
            if (res.length === 0) {
                element.target.classList.remove(classes.error);
            }
            else {
                element.target.classList.add(classes.error);
                res.forEach(x => {
                    if (!passErrors.includes(x.message)) {
                        passErrors.push(x.message.replace('VARIABLE', 'First'));
                    }
                })
            }
            setUserData(userData, userData.FirstName = element.target.value);
            setFNameErrors(list => list = passErrors);
        }
        else if (element.target.id === 'lname') {
            let passErrors = [];

            let res = validateField(element.target.value);
            if (res.length === 0) {
                element.target.classList.remove(classes.error);
            }
            else {
                element.target.classList.add(classes.error);
                res.forEach(x => {
                    if (!passErrors.includes(x.message)) {
                        passErrors.push(x.message.replace('VARIABLE', 'Last'));
                    }
                })
            }
            setUserData(userData, userData.LastName = element.target.value);
            setLNameErrors(list => list = passErrors);
        }
        else if (element.target.id === 'email') {
            if (!EmailValidator.validate(element.target.value)) {
                element.target.classList.add(classes.error);
                if (!mailErrors.includes('The email is invalid ')) {
                    setMailErrors(list => [...list, 'The email is invalid']);
                }
            }
            else {
                setMailErrors(list => []);
                element.target.classList.remove(classes.error);
            }
            setUserData(userData, userData.Email = element.target.value);
            element.target.value = element.target.value.toLowerCase();
        }
        else if (element.target.id === 'pass') {
            if (element.target.value.length === 0) {
                setPassStrength(-1);
            }
            else {
                let passErrors = [];

                let res = validate(element.target.value);
                if (res.length === 0) {
                    element.target.classList.remove(classes.error);
                }
                else {
                    element.target.classList.add(classes.error);
                    res.forEach(x => {
                        if (!passErrors.includes(x.message)) {
                            passErrors.push(x.message);
                        }
                    })
                }
                setPassErrors(list => list = passErrors);
            }
            setPassStrength(passwordStrength(element.target.value));
            setUserData(userData, userData.Password = element.target.value);
        }
        else {
            element.target.classList.remove(classes.error);
        }

        let fields = document.getElementsByClassName(classes.field);
        for (const iterator of fields) {
            if (iterator.value === '') {
                return setActive(false);
            }
        }
        if (fNameErrors.length > 0 || lNameErrors.length > 0 || passErrors.length > 0 || mailErrors.length > 0) {
            return setActive(false);
        }

        return setActive(true);
    }

    function setConfirmationStage() {
        if (!confirmation) {
            createAccount(active, userData)
            setConfirmation(true);
        }
    }

    function getStage() {
        if (!confirmation) {
            return <>
                <h2>Start for free</h2>
                <h1>Create new account</h1>
                <h3>Already a Member?
                    <Link to="/login" style={{ marginLeft: '4px' }}>
                        <span style={{ color: 'var(--green)' }}>Log in</span>
                    </Link>
                </h3>
                <div className={classes.fields}>
                    <div className={classes.name}>
                        <input id='fname' className={classes.field} onChange={checkAvailability} placeholder='First name' />
                        <input id='lname' className={classes.field} onChange={(elem) => checkAvailability(elem)} placeholder='Last name' />
                    </div>
                    <input id='email' className={classes.field} onChange={(elem) => checkAvailability(elem)} placeholder='Email' />
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <input id='pass' type='password' className={classes.field} onChange={(elem) => checkAvailability(elem)} placeholder='Password' />
                        <div style={getStrength(passStrength)}></div>
                    </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <TransitionGroup component="ul" className={classes.errors}>{
                        fNameErrors.map((element) => {
                            return <CSSTransition key={element} timeout={700} classNames="item">
                                <li id={element} key={element}>
                                    {element}
                                </li>
                            </CSSTransition>
                        })
                    }
                    </TransitionGroup>
                    <TransitionGroup component="ul" className={classes.errors}>{
                        lNameErrors.map((element) => {
                            return <CSSTransition key={element} timeout={700} classNames="item">
                                <li id={element} key={element}>
                                    {element}
                                </li>
                            </CSSTransition>
                        })
                    }
                    </TransitionGroup>
                    <TransitionGroup component="ul" className={classes.errors}>{
                        mailErrors.map((element) => {
                            return <CSSTransition key={element} timeout={700} classNames="item">
                                <li id={element} key={element}>
                                    {element}
                                </li>
                            </CSSTransition>
                        })
                    }
                    </TransitionGroup>
                    <TransitionGroup component="ul" className={classes.errors}>{
                        passErrors.map((element) => {
                            return <CSSTransition key={element} timeout={700} classNames="item">
                                <li id={element} key={element}>
                                    {element}
                                </li>
                            </CSSTransition>
                        })
                    }
                    </TransitionGroup>
                </div>
                <button onClick={setConfirmationStage} className={active ? '' : classes.restricted}>Create account</button>
            </>
        }
        else {
            return <Confirmation userData={userData.Email}/>
        }
    }

    function getTitle() {
        if (!confirmation) {
            return 'Start for free';
        }
        else {
            return 'Almost done';
        }
    }

    function getSubTitle() {
        if (!confirmation) {
            return 'Create new account';
        }
        else {
            return 'Confirm your email';
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.holder}>

                {getStage()}
            </div>
        </div >
    )
}

export default Registration;