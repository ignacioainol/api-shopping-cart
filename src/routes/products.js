const express = require('express');
const router = require('express').Router();

const productsModel = require('../models/Products');

router.get('', async (req,res) => {
    const products = await productsModel.getAll();
    res.send(products);
});

module.exports = router;