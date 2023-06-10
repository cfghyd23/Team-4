const jwt = require('jsonwebtoken');
const { exists } = require('./models/usermodel');

module.exports = function (req,res,next){
    try{
        let token=req.header('x-token');
        if(!token){
            return res.status(400).send('Token not found');
        }
        let decode=jwt.verify(token,'jwtSecret');
        req.user=decode.user
        next()
    }
    catch(err){
        console.log(err);
    }
}