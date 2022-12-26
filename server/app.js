const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const { CarRoutes } = require('./routes/carRoutes');

const app = express();
const ConnectString = "mongodb+srv://crustbrns:gAzAt0Hx6mVrxiDQ@cluster0.yml35q2.mongodb.net/?retryWrites=true&w=majority";

app.use(
    express.json({
        type: ["application/json", "text/plain"],
    })
);
app.use(cors());

async function start() {
    try {
        await mongoose.connect(ConnectString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        app.listen(3001, () => {
            console.log('Server is working');
        })
    }
    catch (e) {
        console.log(e.message);
    }

    await CarRoutes(app);
}

start();
