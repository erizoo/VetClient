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
    passport: {
        type: String
    },
    numberMobile: {
        type: String,
        required: true
    },
    homePhoneNumber: {
        type: String
    },
    workPhoneNumber: {
        type: String
    },
    email: {
        type: String
    },
    city:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    numberHouseOrFlat: {
        type: String,
        required: true
    },


})

module.exports = mongoose.model('clients', categorySchema)