import axios from 'axios';

const express = require('express');
const productsApi = express.Router();
const { Product } = require('../models')
const proxy = require('http-proxy-middleware')

const Base_URL = 'http://localhost:3001/products'

const api = axios.create({
    baseURL: Base_URL
})

productsApi.get('/', async (req, res) => {
    try{
        const allProducts = await Product.findAll();
        res.send(allProducts)
        console.log(res.json);
        return res.json;
    }
        catch (e) {
        console.log(e.message);
    }
})

productsApi.post('/:id', async (req, res) => {
    try{
        const postedProducts = await Product.create(req.body);
        res.send(postedProducts)
        console.log(res.json);
        return res.json;
    }
        catch (e) {
        console.log(e.message);
    }
})

productsApi.get('/:id', async (req, res) => {
    try{
        const oneProduct = await Product.findByPk(req.params.id);
        res.send(oneProduct)
        console.log(res.json);
        return res.json;
    }
        catch (e) {
        console.log(e.message);
    }
})

productsApi.put('/:id', async (req, res) => {
  console.log('in productApi')
  try {
    const id = req.params.id;
    const editedProduct = await Product.findByPk(id);
    if (editedProduct) await editedProduct.update(req.body);
    res.json({
      editedProduct
    });
  } catch(e) {
    res.status(304).json({
      message: e.message
    });
    }
  })

productsApi.delete('/:id', async (req, res) => {
  try {
    const deleteProduct = await Pet.findByPk(req.params.id);
    await deleteProduct.destroy();
    res.send(`successfully deleted selection ${deleteProduct}`);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = { productsApi };
