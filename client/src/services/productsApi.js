import axios from 'axios';

// const express = require('express');
// const productsApi = express.Router();
// const { Product } = require('../../models')
const proxy = require('http-proxy-middleware')

const Base_URL = 'http://localhost:3001/products'

const api = axios.create({
    baseURL: Base_URL
})

export const allProducts = async () => {
    try{
        const resp = await api.get('/');
        console.log(resp.data);
        return resp.data;
    }
    catch (e) {
        console.log(e.message);
    }
}
//
export const addProduct = async (data) => {
    try{
        const resp = await api.post('/', data);
        console.log(resp.data);
        return resp
    }
    catch(e){
        console.log(e.message)
    }
}

export const putProduct = async (id, data) => {
    try{
        console.log(id, 'id')
        console.log(data, 'data')
        const resp = await api.put(`/${id}`, data);
        console.log(resp.json);
        return resp.json;
    }
    catch(e){
        console.log(e.message)
    }
}

export const deleteProduct = async (id) => {
    try{
        const resp = await api.delete(`/${id}`);
        return console.log(resp, 'deleted');
    }
    catch (e) {
        console.log(e.message)
    }
}
//
// productsApi.get('/', async (req, res) => {
//     try{
//         const allProducts = await Product.findAll();
//         res.send(allProducts)
//         console.log(res.json);
//         return res.json;
//     }
//         catch (e) {
//         console.log(e.message);
//     }
// })
//
// productsApi.post('/:id', async (req, res) => {
//     try{
//         const postedProducts = await Product.create(req.body);
//         res.send(postedProducts)
//         console.log(res.json);
//         return res.json;
//     }
//         catch (e) {
//         console.log(e.message);
//     }
// })
//
// productsApi.get('/:id', async (req, res) => {
//     try{
//         const oneProduct = await Product.findByPk(req.params.id);
//         res.send(oneProduct)
//         console.log(res.json);
//         return res.json;
//     }
//         catch (e) {
//         console.log(e.message);
//     }
// })
//
// productsApi.put('/:id', async (req, res) => {
//   console.log('in productApi')
//   try {
//     const id = req.params.id;
//     const editedProduct = await Product.findByPk(id);
//     if (editedProduct) await editedProduct.update(req.body);
//     res.json({
//       editedProduct
//     });
//   } catch(e) {
//     res.status(304).json({
//       message: e.message
//     });
//     }
//   })
//
// productsApi.delete('/:id', async (req, res) => {
//   try {
//     const deleteProduct = await Pet.findByPk(req.params.id);
//     await deleteProduct.destroy();
//     res.send(`successfully deleted selection ${deleteProduct}`);
//   } catch (e) {
//     console.log(e.message);
//   }
// });

// module.exports = { getAllProducts };
