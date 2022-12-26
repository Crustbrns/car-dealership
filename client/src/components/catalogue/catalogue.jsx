import React from 'react';
import classes from './catalogue.module.css';
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

const Catalogue = function () {
    const [cars, setCars] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3001/api/cars/receive-all')
            .then(response => response.json())
            .then(data => setCars(data.cars));
    }, []);

    function calcTime(index) {
        console.log('asdqweqweqweqw');
        return `${(index + 1) * 0.05}s`;
    }

    function getCars() {
        if (!cars) {
            return <div>
                <div>Loading...</div>
            </div>
        } else if (cars == null || cars?.length <= 0) {
            return <div>
                {/* <div>There is no cars</div> */}
            </div>
        }
        else return <div className={classes.content__container}>
            {cars?.map((car, index) => {
                return <div className={classes.content + ' ' + classes.content_active} style={{ animationDuration: `${calcTime(index)}` }} key={car._id}>
                    <Link to={"/cars/"+car._id}>
                        <img src={car.picture} style={{ objectFit: "cover", width: "110%", paddingBottom: "5px" }} />
                        <h2 style={{ padding: "10px" }}>{car.model}</h2>
                        <h2 style={{ padding: "10px" }}>{car.price} гривен</h2>
                        <h4 style={{ padding: "10px" }}>{car.description}</h4>
                    </Link>
                </div>
            })}
        </div>
    }
    return (
        <div className={classes.test_class}>
            {getCars()}
        </div>
    )
}

export default Catalogue;