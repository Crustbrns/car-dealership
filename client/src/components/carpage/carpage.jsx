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
                        <img src={item.picture} className={classes.image} />
                    </div>
                    <div className={classes.additional}>
                        <p>Модель: {item.model}</p>
                        <p style={{marginTop: "20px"}} >Цена: {item.price}</p>
                        <p>Цвет: {item.color}</p>
                        <p style={{marginTop: "20px"}} className={classes.description}>{item.description}</p>
                    </div>
                </div> : ""}
        </div >
    )
}

export default CarPage;