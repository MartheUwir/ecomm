import userModel from "../models/userModel";
import { hashPassword } from "../helpers/authHelper";

export const registerController = async(req,res) => {
    try {

        const{name,email,password,phone,address} =req.body;
        //validations

        if(!name){
            return res.send({error:"Name is required"});
        }
       if(!email){
        return res.send({error:"email required"});
       }
       if(!password){
        return res.send({error:"Password required"});
       }
       if(!phone){
        return res.send({error:"Phone number required please"});
       }
       if(!address){
        return res.send({error:"Address required"});
       }

       //for login 
      const existingUser = await userModel.findOne({email})

     if(existingUser){
           return res.status(200).send({
            success:true,
            message:"Account already registered, please login",
           })

    }
 //register user 

 const hashedPassword = await hashPassword(password)

 //saving
const user = new userModel({name,email,phone,address,password:hashedPassword}).save();
res.status(201).send({
    success:true,
    message:"User registered successfully", 
    user,
});

    } catch (error){ 
        console.log(error);
        res.status(500).send({
            success:false,
            message:"error in Registration",
            error
        });
    }
};

