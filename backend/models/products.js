const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title:{type: String,required: [true, 'plaese insert title']},
    caption:{type: String,required: [true, 'plaese insert caption']},
    author:{type: String,required: [true, 'plaese insert author']},
    image:{type: String,required: [true, 'plaese insert image in base 64 format']},
    dateCreated: { type: Date, default: Date.now },
})

module.exports = mongoose.model('posts',productSchema)