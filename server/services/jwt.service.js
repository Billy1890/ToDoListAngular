const jwt = require('jsonwebtoken')

const jwtkey = 'fjfubndsaiup837r8euwe#@!#R!opifa0'

const SignToken = (data) => jwt.sign(data, jwtkey);

const VerifyToken = (token) => jwt.verify(token, jwtkey);

module.exports = {
    SignToken,
    VerifyToken
}