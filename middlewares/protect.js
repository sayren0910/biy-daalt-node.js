const jwt = require('jsonwebtoken');
const User = require('../model/user');

exports.protect = async (req,res,next) => {
    const testTokent = req.headers.authorization;
    let token;
    if(!testTokent){
        res.status(400).json({
            success:false,
        });
    }
    if(!User){
        return res.status(404).json({success:false, messege: "ene hereglegch bish bn"})
    }
    if (!User || User.role !== "admin"){
        return res.status(404).json({ success: false, message: 'Access denied. You are not authorized as an admin.' });
    }

    token = testTokent.split(" ")[1];
    const verifeToken = jwt.verify(token,process.env.JWT_SECRET);
    console.log(verifeToken)
    const user = await User.findByPk(verifeToken.id)
    req.user = user;

    next();
};

exports.authorize = (...role) => {
    return(req, res, next) => {
        if(!role.includes(req.userRole)){
            throw new MyError ('tanii ert hurehgui baina', 404)
        }
        next();
    }
}