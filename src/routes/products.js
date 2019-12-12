const express = require('express');
const router = require('express').Router();

const productsModel = require('../models/Products');

router.get('/', async (req,res) => {
    try {
        const products = await productsModel.getAll();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error.message);   
    }
});

router.get('/:id', async (req,res) => {
    try {
        const product = await productsModel.getProductById(req.params.id);
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error.message);
    } 
});

router.post('/',  (req,res) => {
    const nombre = req.body.name;
    res.send(nombre);
});

module.exports = router;