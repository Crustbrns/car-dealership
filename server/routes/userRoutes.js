const AutoUser = require("../models/User")

async function CarRoutes(app) {
    app.get('/api/users/receive-all', async (req, res) => {
        let users = await AutoUser.find({}).lean();
        // console.log(JSON.stringify(cars));
        console.log('asdasd');
        res.json({users: users});
    })

    app.post('/api/users/adduser', async (req, res) => {
        const { firstname, secondname, email, passhash } = req.body;
        
        let user = new AutoUser({
            firstname: firstname,
            secondname: secondname,
            email: email,
            passhash: passhash
        })

        await user.save();
        res.json(user);
    })

    app.get("/api/users/:_id", async (req, res) => {
        const car = await AutoUser.findById(req.params._id);
        res.json({ user: user });
    })
}

module.exports = {
    CarRoutes
}