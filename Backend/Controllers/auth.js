const mssql=require('mssql')
const {v4}=require('uuid')
const { DB } = require('../Helpers/dbHelper')

const registerUser=async(req,res)=>{
    try {
        const UserID=v4()
        const {UserName,UserFirstName,UserMiddleName,UserLastName,UserPhone,Email,UserProfilePic,UserBio,UserPassword}=req.body
        const PasswordHash=await bcrypt.hash(UserPassword,6)

        const result=await DB.exec('registerUserProc',{UserID,UserName,UserFirstName,UserMiddleName,UserLastName,UserPhone,Email,UserProfilePic,UserBio,PasswordHash})
        
        if(result.rowsAffected==1){
            return res.status(200).json({message:"User Registered Succesfully"})
        } else{
            return res.status(401).json({message:"Error registering User"})
        }
    } catch (error) {
        return res.status(500).json({Error:error.message})
    }
}