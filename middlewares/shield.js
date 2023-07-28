const jwt = require('jsonwebtoken')
const MyError = require('../unit/myError')
// const User = require('../model/user')



exports.authorize = (...role) => {
    return(req, res, next) => {
        if(!role.includes(req.userRole)){
            throw new MyError ('tanii ert hurehgui baina', 404)
        }
        next();
    }
}