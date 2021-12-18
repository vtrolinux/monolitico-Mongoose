const {MongoClient} = require('mongodb')

//const uri = "mongodb://localhost:27017/banco"
const uri = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DB}`
const client = new MongoClient(uri)

async function run(){
    try {
        await client.connect()
        console.log('conectado mongodb')
    } catch (error) {
        console.log(error)
    }
}

run()

module.exports = client