var authRouter = require('express').Router();
var User = require('../mongoModel/userModal');

authRouter.post('/login', (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        res.status(400).json({err: "Please enter all fields."})
    }

    User.findOne({email})
        .then((user) => {
            if(!user) return res.status(400).json({err: 'Please Signup first'})

            if(password !== user.password) return res.status(400).json({err: 'Wrong Password'});

            res.status(200).json({name: user.name})
        })
});

authRouter.post('/signup', (req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password) {
        res.status(400).json({err: "Please enter all fields."})
    }

    User.findOne({email})
        .then((user) => {
            if(user) return res.status(400).json({err: 'User already exists'})

            const newUser = new User({name, email, password});
            newUser.save()
                .then((user) => {res.status(200).json({name: user.name})})
        })
})

module.exports = authRouter;