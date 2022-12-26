import React from 'react';
import classes from './confirmation.module.css';
import LockIcon from '@mui/icons-material/Lock';

import ReactCodeInput from 'react-code-input';
import { generateCode } from '../Processing/additional';
import { Link, useNavigate } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import HideEmail from './procs';

const Confirmation = function (properties) {
    let navigate = useNavigate();

    let [code, setCode] = React.useState(null);
    let [time, setTime] = React.useState(60);
    let [userData, setUserData] = React.useState(properties.userData);
    let [userCode, setUserCode] = React.useState();
    let [auth, setAuth] = React.useState(false);

    const [toggle, running] = useInterval(() => {
        if (time >= 0) {
            setTime(time, time--);
        }
    }, 500);

    React.useState(async () => {
        await setCode(await generateCode(properties.userData || 'testemail@gmail.com'));
    }, [code]);

    const resetTime = () => setTime(60);
    const toHome = () => navigate('/home');

    function changeCode(event) {
        setUserCode(event);
        if (event.length === 6) {
            setAuth(true);
            console.log('done');
            console.log(event, code, event === code);
            if (event !== code) {
                setTimeout(() => {
                    setUserCode(userCode, userCode = 0);
                    resetTime();
                    setAuth(auth, auth = false);
                    console.log(userCode, code, time, auth);
                }, 1000);
            }
            else if (event === code) {
                setTimeout(() => {
                    toHome();
                }, 2000);
            }
        }
    }
    const props = {
        className: classes.codeinput,
        onChange: changeCode,
        inputStyle: {
            fontFamily: 'monospace',
            margin: '5px',
            borderRadius: '7px',
            border: '1px solid #454549',
            fontSize: '21px',
            fontWeight: '500',
            padding: '8px 8px 8px 20px',
            height: '60px',
            color: 'white',
            backgroundColor: '#494d5e',
            animation: classes.codeEncounter,
        },
        inputStyleInvalid: {
            fontFamily: 'monospace',
            margin: '4px',
            width: '20px',
            padding: '5px 5px 5px 14px',
            borderRadius: '7px',
            fontSize: '15px',
            height: '45px',
            color: 'white'
        }
    }

    function Resend() {
        resetTime();
    }

    function getResendOpportunity() {
        if (time > 0) {
            return `You can resend a Code in ${time} seconds`;
        }
        else return <>
            <span>Didn't get a Code?</span>
            <button onClick={Resend} className={classes.button}>Click to resend</button>
        </>
    }

    function getBody() {
        if (!auth) {
            if (code) {
                return <>
                    <div style={{ padding: '25px' }}>
                        <div className={classes.title}>
                            <div className={classes.icon}><LockIcon sx={{ fontSize: '19px', color: '#202020' }} /></div>
                            <div className={classes.titleText}>Enter confirmation code</div>
                        </div>
                        <div className={classes.content}>
                            We have just sent you a code to confirm your email <span style={{ fontFamily: 'e-Ukraine-M' }}>{HideEmail(userData || 'testmail@email.com')}</span> address, check your inbox.
                        </div>
                        <div className={classes.code}>
                            <ReactCodeInput type='number' fields={6} {...props} />
                        </div>
                        <div className={classes.resend}>
                            {getResendOpportunity()}
                        </div>
                    </div>
                </>
            }
            else {
                return <>
                    <div className={classes.preload}>
                        <CircularProgress className={classes.load}/>
                        <div className={classes.title}>
                            <div className={classes.titleText}>We're sending a code..</div>
                        </div>
                    </div></>
            }
        }
        else {
            console.log(code, userCode);
            if (code === userCode) {
                return <>
                    <div className={`${classes.loader} ${classes.success}`}>
                        <DoneIcon sx={{ fontSize: '40px' }} />
                        <div>Email address confirmed<p>Account has been created</p></div>
                    </div>
                </>
            }
            else if (code !== userCode) {
                return <>
                    <div className={`${classes.loader} ${classes.failure}`}>
                        <CloseIcon sx={{ fontSize: '40px' }} />
                        <div>Provided code is wrong..</div>
                    </div>
                </>
            }

            return <>
                <div className={classes.loader}>
                    <CircularProgress sx={{ color: '#38c26d' }} />
                    <div>Validating your temporary code...</div>
                </div>
            </>
        }
    }

    return (
        <>
            <h2>Almost done</h2>
            <h1>Confirm your Email</h1>
            <h3>Already a Member?
                <Link to="/login" style={{ marginLeft: '4px' }}>
                    <span style={{ color: 'var(--green)' }}>Log in</span>
                </Link>
            </h3>
            <div className={classes.container}>
                {getBody()}
            </div>
        </>
    )
}

function useInterval(callback, delay) {
    const savedCallback = React.useRef();
    const intervalId = React.useRef(null);
    const [currentDelay, setDelay] = React.useState(delay);

    const toggleRunning = React.useCallback(
        () => setDelay(currentDelay => (currentDelay === null ? delay : null)),
        [delay]
    );

    const clear = React.useCallback(() => clearInterval(intervalId.current), []);

    React.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    React.useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (intervalId.current) clear();

        if (currentDelay !== null) {
            intervalId.current = setInterval(tick, currentDelay);
        }

        return clear;
    }, [currentDelay, clear]);

    return [toggleRunning, !!currentDelay];
}

export default Confirmation;