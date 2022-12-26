const express = require('express');
const { CarRoutes } = require('./routes/carRoutes');
const app = express();

app.use(
    express.json({
        type: ["application/json", "text/plain"],
    })
);

app.listen(3001, () => {
    console.log('Server is working');
})

CarRoutes(app);