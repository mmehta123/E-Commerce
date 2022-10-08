const jwt=require('jsonwebtoken');
require('dotenv').config();

const verify=(req,res,next)=>{
    const authHeader=req.headers.token;
    if(authHeader){
        const token=authHeader.split(' ')[1];
        jwt.verify(token,process.env.KEY,(error,user)=>{
            if(error){
                return res.status(403).json({msg:"Invalid Token",status:false});
            }
            req.user=user;
            next();
        });
    }else{
        return res.status(403).json({msg:"you are not authenticated",status:false});
    }
}


module.exports = verify;