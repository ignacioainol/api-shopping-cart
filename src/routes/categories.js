const router = require('express').Router();

const categoriesModel = require('../models/Categories');


router.get('/', async (req,res) => {
    try {
        const categories = await categoriesModel.getAll();
        res.send(categories);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

module.exports = router;