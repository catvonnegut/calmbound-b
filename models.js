const Sequelize = require('sequelize');


const db = new Sequelize(process.env.DATABSE_URL || 'postgres://localhost:5432/calmboundDb',{
  database: 'calmboundDb',
  dialect: 'postgres',
  define: {
    returning: true
  },
  tableName: 'Products'
});

const Product = db.define('product', {
  id: {
  type: Sequelize.INTEGER,
  primaryKey: true,
  autoIncrement: true,
},
  line: Sequelize.STRING,
  flavor: Sequelize.STRING,
  image: Sequelize.STRING,
  description: Sequelize.TEXT,
  price: Sequelize.INTEGER,
})

db.sync()

module.exports = {
  Product,
  db
}
