import jwt from 'jsonwebtoken'
import UsersCollection from '../models/userSchema.js'

async function verifyToken (req,res,next){

    try{
   
        const token = req.headers["token"]
      
        const payload = jwt.verify(token, process.env.TOKEN_SECRET_KEY )

        const user = await UsersCollection.findById(payload._id)

        req.user = user
        next() 
    }
    catch(err){
        next(err)
    }
}

export default verifyToken