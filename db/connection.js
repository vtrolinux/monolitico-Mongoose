const mongoose = require('mongoose')

async function main() {
  await mongoose.connect(`mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_BANCO}`)
  console.log('Mongoose conectado [x]')
}

main().catch((err) => console.log(err))

module.exports = mongoose
