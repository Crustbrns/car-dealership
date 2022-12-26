import React from 'react';
import classes from './carpage.module.css';
import { BrowserRouter as Router, Link, NavLink, useParams } from "react-router-dom";

const CarPage = function () {
    const [item, setItem] = React.useState(null);
    const { _id } = useParams();

    async function getItem() {
        console.log("http://localhost:3001/api/cars/" + _id);

        await fetch(`http://localhost:3001/api/cars/${_id}`)
            .then(result => result.json())
            .then(data => setItem(data.car));

    }

    React.useState(() => {
        getItem();
    }, null);

    return (
        <div className='flex_content'>
            {item ?
                <div className={`flex ${classes.container}`}>
                    <div className={classes.image_container}>
                        <img src={item.url} className={classes.image} />
                    </div>
                    <div className={classes.additional}>
                        <p>Title: {item.title}</p>
                        <p>Price: {item.price}</p>
                        <p className={classes.description}>{item.description}</p>
                    </div>
                </div> : "Loading"}
        </div >
    )
}

export default CarPage;