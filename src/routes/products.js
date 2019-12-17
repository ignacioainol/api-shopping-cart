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

router.post('/', async  (req,res) => {
    try {
        const { name, price, description } = req.body;

        const newProduct = await productsModel.save(name, price, description);
        res.status(201).send(newProduct);

    } catch (error) {
        res.status(500).send(error.message);
    }    
});

router.put('/:id', async (req,res) => {
    try {
        const productId = req.params.id;
        const product = productsModel.getProductById(productId);

        if(product){
            const { body: productData } = req;
            const productEdited = await productsModel.update(productId, productData);
            res.status(200).send(productEdited);
        }else{
            res.status(404).send("Product does not exist");
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete('/:id', async (req,res) => {
    try {
        const productId = req.params.id;
        const product = await productsModel.getProductById(productId);
        if(product){
            await productsModel.remove(productId);
            res.status(200).send(product);
        }else{
            res.status(404).send();
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
})

module.exports = router;