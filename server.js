const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
require('dotenv').config()

const connection = require('./db/connection')

//config handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.static('public'))
//body parser, necessario para se trabalhar com forms
app.use(express.urlencoded({ extended: true }))
//import controller for /
const listProductsHome = require('./controllers/ProductController').showProducts
//import routes
const productsRoutes = require('./routes/productsRoutes.js')
//routes
app.use('/products', productsRoutes)
app.use('/', listProductsHome)

app.listen(3000,()=>{
    console.log('rodando na porta 3000')
})