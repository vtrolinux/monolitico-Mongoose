const connection = require('../db/connection')
const { ObjectId } = require('mongodb')

class Product {
    constructor(name, price, description, image){
        this.name = name
        this.price = price
        this.description = description
        this.image = image
    }
    save(){
        const product = connection.db().collection('products').insertOne({
            name: this.name,
            price: this.price,
            description: this.description,
            image: this.image
        })
        return product
    }
    static getProducts() {
        const products = connection.db().collection('products').find().toArray()  
        return products
    }
    static async getProductById(id) {
        const product = await connection.db().collection('products').findOne({ _id: ObjectId(id) })  
        return product
    }
    updateProduct(id) {
        connection.db().collection('products').updateOne({ _id: ObjectId(id) }, { $set: this }) 
        return
      }
    static async removeProductById(id) {
        await connection.db().collection('products').deleteOne({ _id: ObjectId(id) })
        return
    }
}
module.exports = Product