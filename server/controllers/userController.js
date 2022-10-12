const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body

        if (!email || !password) {
            return next(ApiError.badRequest('Wrong email or password'))
        }

        const userExists = await User.findOne({where: {email}})
        if (userExists) {
            return next(ApiError.badRequest('User with the same email already exists'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)

        return res.json({token})
    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const {id} = req.query

        if (!id) {
            return next(ApiError.badRequest('ID is required'))
        }

        res.json(id)
    }
}

module.exports = new UserController()