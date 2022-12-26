const Car = require("../models/Car")

async function CarRoutes(app) {
    app.get('/api/cars/receive-all', (req, res) => {
        let cars = Car.find({});
        console.log(cars);
    })
}

module.exports = {
    CarRoutes
}