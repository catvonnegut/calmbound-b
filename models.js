const Sequelize = require('sequelize');


const db = new Sequelize(process.env.DATABSE_URL || 'postgres://localhost:5432/calmboundDb',{
  database: 'calmboundDb',
  dialect: 'postgres'
});

const Product = db.define('product', {
  line: Sequelize.STRING,
  flavor: Sequelize.STRING,
  compound: {
    type: Sequelize.STRING,
    allowNull: true},
  seasonal: Sequelize.BOOLEAN,
  serving: Sequelize.STRING,
  image: Sequelize.STRING,
  description: Sequelize.TEXT,
  price: Sequelize.INTEGER,
})

db.sync()

module.exports = {
  Product,
  db
}
