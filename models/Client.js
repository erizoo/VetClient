const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    lastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String
    },
    numberMobile: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('clients', categorySchema)