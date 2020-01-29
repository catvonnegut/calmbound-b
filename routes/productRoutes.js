const express = require('express');
const productRouter = express.Router();

const { Product } = require('../models');

// represents localhost:PORT/pets/

//get all those pets yeah
productRouter.get('/', async (req, res) => {
  try {
    const allProducts = await Product.findAll();
    res.send(allProducts);
  } catch (e) {
    console.log(e.message);
  }
});


// post new pet
productRouter.post('/', async (req, res) => {
  try {
    const postedProduct = await Product.create(req.body);
    res.send(postedProduct);
  } catch (e) {
    console.log(e.message);
  }
});

//find one pet
productRouter.get('/:id', async (req, res) => {
  try {
    const selectedProduct = await Product.findByPk(req.params.id);
    res.send(selectedProduct);
  } catch (e) {
    console.log(e.message);
  }
});

//update existing pets
// petRouter.put('/:id', async (req, res) => {
//     try {
//       const id = req.params.id;
//       const selectedPet = await Pet.findByPk(id);
//       if (selectedPet) await selectedPet.update(req.body);
//       res.json('update success' + selectedBody);
//     } catch(e) {
//       res.json(console.log(e + 'oh no so sad man'))
//     }
//   })

productRouter.put('/:id', async (req, res) => {
  console.log('in productRouter')
  try {
    const id = req.params.id;
    const selectedProduct = await Product.findByPk(id);
    if (selectedProduct) await selectedProduct.update(req.body);
    res.json({
      selectedProduct
    });
  } catch(e) {
    res.status(304).json({
      message: e.message
    });
    }
  })

// delete particular pet
productRouter.delete('/:id', async (req, res) => {
  try {
    const deleteIt = await Product.findByPk(req.params.id);
    await deleteIt.destroy();
    res.send(`successfully deleted selection ${deleteIt}`);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = { productRouter };
