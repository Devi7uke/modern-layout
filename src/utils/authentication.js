const jwt = require('jsonwebtoken')

const secretKey = 'f63026771d2190ce2e03a519ce11c8a29967786b511a8822e6bf9628ac614ab8'

const generateToken = (userData) => {
    const token = jwt.sign(userData, secretKey, {expiresIn: '24h'})
    return token
}

const verifyToken = (token) => {
    try {
        const decodedToken = jwt.verify(token, secretKey)
        return decodedToken
    } catch (error) {
        return null
    }
}

module.exports = {generateToken, verifyToken}