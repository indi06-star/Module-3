import {compare} from 'bcrypt'
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
import {findUserByEmail} from '../model/usersModal.js'
// const {sign,verify} = jwt
config()


export const checkPassword =async(req,resizeBy,next)=>{
    let[user] = await findUserByEmail(req.body.u_email)
    let result = await compare(req.body.u_password,user)
}