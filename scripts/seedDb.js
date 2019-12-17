const { Product, db } = require('../models.js')

const seedDb = async () => {
  /* delete everything in the database */

  await Product.destroy({where: {}});
  await Product.destroy({where: {}});

  /* product seed data */

  await Product.create({
    line:'Backhome',
    flavor: 'Cinnamon Coffee Cake',
    image: '../client/src/assets/Cinnamon-Coffee-Cake-.png',
    description: 'Cup of Cinnamon Coffee Cake',
    price: '5'
  })

  await Product.create({
    line:'Backhome',
    flavor: 'Chocolate Cake',
    image: '../client/src/assets/Chocolate-Cake-.png',
    description: 'Cup of Chocolate Cake',
    price: '5'
  })

  await Product.create({
    line:'Backhome for the Holidays',
    flavor: 'Gingerbread Cake',
    image: '../client/src/assets/xmas-tree-.png',
    description: 'Cup of Gingerbread Cake',
    price: '5'
  })

  await Product.create({
    line:'Vacation for the Holidays',
    flavor: 'Peppermint Mocha Bon Bons',
    image: '../client/src/assets/xmas-tree-.png',
    description: 'Peppermint Mocha Bon Bons',
    price: '10'
  })

  await Product.create({
    line:'Vacation',
    flavor: 'Smoked Maple Sea Salt Chocolates',
    image: '../client/src/assets/maple-.png',
    description: 'Smoked Maple Sea Salt Chocolates',
    price: '10'
  })

  await Product.create({
    line:'Vacation',
    flavor: 'Sesame Buttercups',
    image: '../client/src/assets/sesame-.png',
    description: 'Sesame Buttercups',
    price: '10'
  })

  await Product.create({
    line:'Vacation',
    flavor: 'Orange Chocolate Ganache',
    image: '../client/src/assets/Orange-Ganache-.png',
    description: 'Orange Chocolate Ganache',
    price: '10'
  })

  await Product.create({
    line:'Vacation',
    flavor: 'Mocha Ganache',
    image: '../client/src/assets/Orange-Ganache-.png',
    description: 'Mocha Ganache',
    price: '10'
  })
}

  async function run() {
    try {
      await seedDb();
    } catch (e) {
      console.error(e);
    } finally {
      await process.exit()
    }
  }

  run();
