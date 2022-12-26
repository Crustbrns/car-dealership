const Car = require("../models/Car")

async function CarRoutes(app) {
    app.get('/api/cars/receive-all', async (req, res) => {
        let cars = await Car.find({}).lean();
        // console.log(JSON.stringify(cars));
        console.log('asdasd');
        res.json({cars: cars});
    })

    app.post('/api/cars/addcar', async (req, res) => {
        const { model, color, price, picture, description } = req.body;

        let car = new Car({
            model: model,
            color: color,
            price: price,
            picture: picture,
            description: description
        })

        await car.save();
        res.json(car);
    })
}

module.exports = {
    CarRoutes
}