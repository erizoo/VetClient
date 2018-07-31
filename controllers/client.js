const Client = require('../models/Client')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function (req, res) {
    try {
        const clients = await Client.find({})
        setTimeout(() => {
            res.status(200).json(clients)
        }, 500)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function(req, res) {
    try {
        const client = await Client.findById(req.params.id)
        res.status(200).json(client)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.create = async function(req, res) {
    console.log('req.body.lastName' + req.body)
    const client = new Client({
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        passport: req.body.passport,
        numberMobile: req.body.numberMobile,
        homePhoneNumber: req.body.homePhoneNumber,
        workPhoneNumber: req.body.workPhoneNumber,
        email: req.body.email,
        city: req.body.city,
        numberHouseOrFlat: req.body.numberHouseOrFlat,
        address: req.body.address
    })
    console.log('client' + client)
    try {
        await client.save()
        res.status(201).json(client)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req, res) {
    const updated = {
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        passport: req.body.passport,
        numberMobile: req.body.numberMobile,
        homePhoneNumber: req.body.homePhoneNumber,
        workPhoneNumber: req.body.workPhoneNumber,
        email: req.body.email,
        city: req.body.city,
        numberHouseOrFlat: req.body.numberHouseOrFlat,
        address: req.body.address
    }

    try {
        const client = await Client.findOneAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        )
        res.status(200).json(client)
    } catch (e) {
        errorHandler(res, e)
    }
}
