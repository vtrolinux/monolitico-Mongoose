const Product = require('../models/Product')

module.exports = class ToughController {

  static async showProducts(req, res) {
    const products = await Product.find().lean()
    //lean() --> muleta do handlebars
    res.render('products/all', { products })
  }
  static createProduct(req, res) {
    res.render('products/create')
  }
  static async createProductPost(req, res) {

    const product = new Product({
      name: req.body.name,
      price: req.body.price, 
      description: req.body.description, 
      image: req.body.image
    })

    await product.save()

    res.redirect('/products')
  }
  static async getProduct(req, res) {
    const id = req.params.id
    const product = await Product.findById(id).lean()
    console.log(product)

    res.render('products/product', { product })
  }
  static async editProduct(req, res) {
    const id = req.params.id
    const product = await Product.findById(id).lean()

    res.render('products/edit', { product })
  }
  static async editProductPost(req, res) {
    const id = req.body.id

    const product = { 
      name: req.body.name, 
      price: req.body.price, 
      description: req.body.description, 
      image: req.body.image
    }
    await Product.updateOne({ _id: id }, product)

    res.redirect('/')
  }
  static async removeProduct(req, res) {
    const id = req.params.id
    console.log('id delete: '+id)
    await Product.deleteOne({ _id: id })

    res.redirect('/')
  }
}