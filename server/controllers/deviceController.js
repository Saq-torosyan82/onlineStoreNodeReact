const {Device} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class DeviceController {
    async getAll(req, res) {

    }

    async getById(req, res) {

    }

    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"

            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const brand = await Device.create({name, price, brandId, typeId, img: fileName})
            return res.json(brand)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new DeviceController()