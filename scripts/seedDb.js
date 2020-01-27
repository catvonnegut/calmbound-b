const { Product, db } = require('../models.js')

const seedDb = async () => {
  /* delete everything in the database */

  // await Product.destroy({where: {}});

  /* product seed data */

  await Product.create({
    line:'Backhome',
    flavor:'Cinnamon Coffee Cake Baking Mix',
    compound:'',
    servings:'8',
    seaonal: false,
    image: '../client/src/assets/Cinnamon-Coffee-Cake-.png',
    description: 'This baking mix works overtime to fill the roles of pancake, waffle, and microwave mug cake, and each treat earns a perfect score for taste and simplicity. Just add water and in a couple of minutes, you will have yourself a warm, welcoming treat however you want, whenever you want!',
    price: '9'
  })

  await Product.create({
    line:'Backhome',
    flavor: 'Chocolate Baking Mix',
    compound:'',
    servings:'8',
    seaonal: false,
    image: '../client/src/assets/Chocolate-Cake-.png',
    description: 'When prepared as a mug cake, this mix transforms into a gooey, chocolate lava cake, bringing hot chocolate to a whole new level. As with all our cake mixes, it`s vegan and gluten-free, and can also be prepared as a waffle or pancake!',
    price: '9'
  })

  await Product.create({
    line:'Backhome',
    flavor: 'Red Velvet Raspberry Baking Mix',
    compound:'',
    servings:'8',
    seaonal: false,
    image: '../client/src/assets/xmas-tree-.png',
    description: 'We only use the best ingredients available for our mixes, and this commitment makes an amazing flavor and texture whether you want to make a mug cake, pancake, or waffle. We use no artificial colors or flavors, and the red you may see in our red velvet actually comes from beet powder, not that you could taste it, because the raspberry comes through so beautifully.',
    price: '9'
  })

  await Product.create({
    line:'Backhome for Valentine`s Day',
    flavor: 'Red Velvet Raspberry Cake Baking Mix',
    compound:'',
    servings:'8',
    seaonal: true,
    image: '../client/src/assets/xmas-tree-.png',
    description: 'Love is in the air, and we want you to know we love making you happy! We only use the best ingredients and remain committed to making products with amazing flavor and texture potential, whether you’re in the mood for making pancakes, waffles, or mug cakes. So, you up for a bit of breakfast-in-bed? Satin sheets and red velvet raspberry treats? Just add water and a couple minutes to make. It’s quick and easy so you have time for more...romantic activities ;-)',
    price: '9'
  })

  await Product.create({
    line:'Backhome for the Holidays',
    flavor: 'Gingerbread Cake Baking Mix',
    compound:'',
    servings:'8',
    seaonal: true,
    image: '../client/src/assets/xmas-tree-.png',
    description: 'The  gingerbread waffle is so flavorful it`s been argued that it doesn`t need syrup. A little definitely goes a long way! Don`t have a waffle iron? The pancake and mug cake perparations are like a spiced sponge cake, and very easy to make!',
    price: '9'
  })

  //for infused products, descriptions should include effects of the infusion.

  await Product.create({
    line:'Backhome',
    flavor:'Cinnamon Coffee Cake Baking Mix',
    compound:'CBD',
    servings:'8',
    seaonal: false,
    image: '../client/src/assets/Cinnamon-Coffee-Cake-.png',
    description: 'This baking mix works overtime to fill the roles of pancake, waffle, and microwave mug cake, and each treat earns a perfect score for taste and simplicity. Just add water and in a couple of baking minutes, you will have yourself a warm, welcoming breakfast, brunch, brinner, or dessert!',
    price: '20'
  })

  await Product.create({
    line:'Backhome',
    flavor: 'Chocolate Baking Mix',
    compound:'CBD',
    servings:'8',
    seaonal: false,
    image: '../client/src/assets/Chocolate-Cake-.png',
    description: 'When prepared as a mug cake, this mix transforms into a gooey, chocolate lava cake, bringing hot chocolate to a whole new level. As with all our cake mixes, it`s vegan and gluten-free, and can also be prepared as a waffle or pancake!',
    price: '20'
  })

  await Product.create({
    line:'Backhome',
    flavor: 'Red Velvet Raspberry Baking Mix',
    compound:'CBD',
    servings:'8',
    seaonal: false,
    image: '../client/src/assets/xmas-tree-.png',
    description: 'We only use the best ingredients available for our mixes, and this commitment makes an amazing flavor and texture whether you want to make a mug cake, pancake, or waffle. We use no artificial colors or flavors, and the red you may see in our red velvet actually comes from beet powder, not that you could taste it, because the raspberry comes through beautifully.',
    price: '20'
  })

  await Product.create({
    line:'Backhome for Valentine`s Day',
    flavor: 'Red Velvet Raspberry Cake Baking Mix',
    compound:'CBD',
    servings:'8',
    seaonal: true,
    image: '../client/src/assets/xmas-tree-.png',
    description: 'Love is in the air, and we want you to know we do our best to make you happy. We only use the best ingredients for our mixes, and achieve amazing flavor and texture potential whether you`re in the mood for making pancakes, waffles, or mug cakes. So, you up for a bit of breakfast-in-bed? Satin sheets and red velvet raspberry treats? Just add water and a couple minutes to bake. It`s quick and easy, so you have energy for more...romantic activities ;-)',
    price: '20'
  })

  await Product.create({
    line:'Backhome for the Holidays',
    flavor: 'Gingerbread Cake Baking Mix',
    compound:'CBD',
    servings:'8',
    seaonal: true,
    image: '../client/src/assets/xmas-tree-.png',
    description: 'The  gingerbread waffle is so flavorful it`s been argued that it doesn`t require syrup, but we think a little goes a long way! Don`t have a waffle iron? The pancake and mug cake perparations are like a spiced sponge cake, and very easy to make!',
    price: '20'
  })

  await Product.create({
    line:'Backhome',
    flavor: 'Cinnamon Coffee Cake Baking Mix',
    compound:'',
    servings:'1',
    seaonal: false,
    image: '../client/src/assets/Cinnamon-Coffee-Cake-.png',
    description: 'This baking mix works overtime to fill the roles of pancake, waffle, and microwave mug cake, and each treat earns a perfect score for taste and simplicity. Just add water and in a couple of baking minutes, you will have yourself a warm, welcoming breakfast, brunch, brinner, or dessert!',
    price: '5'
  })

  await Product.create({
    line:'Backhome',
    flavor: 'Chocolate Baking Mix',
    compound:'',
    servings:'1',
    seaonal: false,
    image: '../client/src/assets/Chocolate-Cake-.png',
    description: 'When prepared as a mug cake, this mix transforms into a gooey, chocolate lava cake, bringing hot chocolate to a whole new level. As with all our cake mixes, this can also be prepared as a waffle or pancake.',
    price: '5'
  })

  await Product.create({
    line:'Backhome',
    flavor: 'Red Velvet Raspberry Baking Mix',
    compound:'',
    servings:'1',
    seaonal: false,
    image: '../client/src/assets/xmas-tree-.png',
    description: 'We only use the best ingredients available for our mixes, and this commitment makes an amazing flavor and texture whether you want to make a mug cake, pancake, or waffle. We use no artificial colors or flavors, and the red you may see in our red velvet actually comes from beet powder, not that you could taste it, because the raspberry flavor comes through beautifully.',
    price: '5'
  })

  await Product.create({
    line:'Backhome',
    flavor: 'Red Velvet Raspberry Baking Mix',
    compound:'CBD',
    servings:'1',
    seaonal: false,
    image: '../client/src/assets/xmas-tree-.png',
    description: 'We only use the best ingredients available for our mixes, and this commitment makes an amazing flavor and texture whether you want to make a mug cake, pancake, or waffle. We use no artificial colors or flavors, and the red you may see in our red velvet actually comes from beet powder, not that you could taste it, because the raspberry flavor comes through beautifully.',
    price: '7'
  })

  await Product.create({
    line:'Backhome for Valentine`s Day',
    flavor: 'Red Velvet Raspberry Cake Baking Mix',
    compound:'',
    servings:'1',
    seaonal: true,
    image: '../client/src/assets/xmas-tree-.png',
    description: 'Love is in the air, and we want you to know we do our best to make you happy. We only use the best ingredients for our mixes, and achieve amazing flavor and texture potential whether you`re in the mood for making pancakes, waffles, or mug cakes. So, you up for a bit of breakfast-in-bed? Satin sheets and red velvet raspberry treats? Just add water and a couple minutes to bake. It`s quick and easy, so you have energy for more...romantic activities ;-)',
    price: '5'
  })

  await Product.create({
    line:'Backhome for Valentine`s Day',
    flavor: 'Red Velvet Raspberry Cake Baking Mix',
    compound:'CBD',
    servings:'1',
    seaonal: false,
    image: '../client/src/assets/xmas-tree-.png',
    description: 'Love is in the air, and we want you to know we do our best to make you happy. We only use the best ingredients for our mixes, and achieve amazing flavor and texture potential whether you`re in the mood for making pancakes, waffles, or mug cakes. So, you up for a bit of breakfast-in-bed? Satin sheets and red velvet raspberry treats? Just add water and a couple minutes to bake. It`s quick and easy, so you have energy for more...romantic activities ;-)',
    price: '7'
  })

  await Product.create({
    line:'Backhome for the Holidays',
    flavor: 'Gingerbread Cake Baking Mix',
    compound:'',
    servings:'1',
    seaonal: false,
    image: '../client/src/assets/xmas-tree-.png',
    description: 'The  gingerbread waffle is so flavorful it`s been argued that it doesn`t require syrup, but we think a little goes a long way! Don`t have a waffle iron? The pancake and mug cake perparations are like a spiced sponge cake, and very easy to make!',
    price: '5'
  })



  await Product.create({
    line:'Backhome for the Holidays',
    flavor: 'Gingerbread Cake Baking Mix',
    compound:'CBD',
    servings:'1',
    seaonal: false,
    image: '../client/src/assets/xmas-tree-.png',
    description: 'The  gingerbread waffle is so flavorful it`s been argued that it doesn`t require syrup, but we think a little goes a long way! Don`t have a waffle iron? The pancake and mug cake perparations are like a spiced sponge cake, and very easy to make!',
    price: '7'
  })


  await Product.create({
    line:'Connect',
    flavor: 'Mocha Ganache Bonbons',
    compound:'CBD',
    servings:'4',
    seaonal: false,
    image: '../client/src/assets/Orange-Ganache-.png',
    description: 'Due to popular demand, we`re making our mocha flavor bonbons available year round! And we teamed up with local roasters Sunrise Connect to get you the strongest coffee flavor infused into our chocolate for an energizing treat that gives you the jolt without the jitters.',
    price: '10'
  })

  await Product.create({
    line:'Connect',
    flavor: 'Coffee Caramel Clusters',
    compound:'CBD',
    servings:'3',
    seaonal: false,
    image: '../client/src/assets/Orange-Ganache-.png',
    description: 'Another brilliant flavor profile featuring coffee beans roasted by our friends at Sunrise Connect, date caramel, shredded coconut, and drizzled dark chocolate.',
    price: '8'
  })

//another note to include effects of infusion
  await Product.create({
    line:'Technic',
    flavor: 'Cinnamon Coffee Cake Baking Mix',
    compound:'THC',
    servings:'8',
    seaonal: false,
    image: '../client/src/assets/Cinnamon-Coffee-Cake-.png',
    description: 'This baking mix works overtime to fill the roles of pancake, waffle, and microwave mug cake, and each treat earns a perfect score for taste and simplicity. Just add water and in a couple of baking minutes, you will have yourself a warm, welcoming breakfast, brunch, brinner, or dessert!',
    price: '20'
  })

  await Product.create({
    line:'Technic',
    flavor: 'Chocolate Cake Baking Mix',
    compound:'THC',
    servings:'8',
    seaonal: false,
    image: '../client/src/assets/Chocolate-Cake-.png',
    description: 'When prepared as a mug cake, this mix transforms into a gooey, chocolate lava cake, bringing hot chocolate to a whole new level. As with all our cake mixes, this can also be prepared as a waffle or pancake.',
    price: '20'
  })

  await Product.create({
    line:'Technic',
    flavor: 'Gingerbread Cake Baking Mix',
    compound:'THC',
    servings:'8',
    seaonal: true,
    image: '../client/src/assets/xmas-tree-.png',
    description: 'The gingerbread cake waffle is so flavorful it`s been argued that it doesn`t require syrup, but we think a little goes a long way! Don`t have a waffle iron? The pancake and mug cake perparations are like a spiced sponge cake, and very easy to make!',
    price: '5'
  })

  await Product.create({
    line:'Technic',
    flavor: 'Red Velvet Raspberry Baking Mix',
    compound:'THC',
    servings:'8',
    seaonal: false,
    image: '../client/src/assets/xmas-tree-.png',
    description: 'Love is in the air, and we want you to know we do our best to make you happy. We only use the best ingredients to achieve amazing flavor and texture potential, whether you`re in the mood for making pancakes, waffles, or mug cakes. So, you up for a bit of breakfast-in-bed? Satin sheets and red velvet raspberry treats? Just add water and a couple minutes to make. It`s quick and easy, so you have time for more romantic activities ;-)',
    price: '20'
  })

  await Product.create({
    line:'Vacation for the Holidays',
    flavor: 'Peppermint Mocha Bon Bons',
    compound:'CBD',
    servings:'4',
    seaonal: false,
    image: '../client/src/assets/xmas-tree-.png',
    description: 'Peppermint Mocha season is arguably the best season, and this product was our biggest hit during the year we launched. The flavor is spot on, as is the creamy texture of the ganache inside the layer of dark chocolate.',
    price: '10'
  })

  await Product.create({
    line:'Vacation',
    flavor: 'Smoked Maple Sea Salt Chocolates',
    compound:'CBD',
    servings:'4',
    seaonal: false,
    image: '../client/src/assets/maple-.png',
    description: 'These chocolates are packed with a decadent flavor combination that is truly unique. Sweetened with Maine maple syrup, salted with smoked maple sea salt from Maine, we complement and elevate our local ingredients to create an unforgetable taste with the original recipe that gave rise to calmbound!',
    price: '10'
  })

  await Product.create({
    line:'Vacation',
    flavor: 'Sesame Buttercups',
    compound:'CBD',
    servings:'4',
    seaonal: false,
    image: '../client/src/assets/sesame-.png',
    description: 'The sesame buttercups are a tahini-based buttercup that tastes just like a peanut buttercup. All of our products are top-8 allergen free, so that means no nuts, gluten, soy, dairy, etc. Food allergies are a personal struggle for us and our loved ones and we enjoy making delicious treats everyone can enjoy.',
    price: '10'
  })

  await Product.create({
    line:'Vacation',
    flavor: 'Orange Chocolate Ganache',
    compound:'CBD',
    servings:'4',
    seaonal: false,
    image: '../client/src/assets/Orange-Ganache-.png',
    description: 'Drool alert! Pairing orange with chocolate offers a refreshing, vibrant contrast and a delicate sweetness. We use a creamy ganache filling wrapped in dark chocolate to pair two delicious flavors with a delectable texture.',
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
