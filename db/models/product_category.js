const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productCategorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('category', productCategorySchema);