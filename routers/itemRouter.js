var itemRouter = require('express').Router();
var Item = require('../mongoModel/itemModal');

itemRouter.get('/', (req, res) => {
    Item.find({})
        .then((items) => {
            res.status(200).json(items);
        })
        .catch(err => {
            res.status(404).json({err: 'Error fetching items'})
        })
})

module.exports = itemRouter;