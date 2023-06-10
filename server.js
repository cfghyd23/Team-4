const express = require('express');
const mongoose = require('mongoose')
const bcrpyt = require('bcryptjs');
const User = require('./models/usermodel');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors')




mongoose.connect("mongodb+srv://root:root@cluster0.37xkg4e.mongodb.net/Marpu?retryWrites=true&w=majority").then(()=>console.log("DB connected"))
app.listen(5000,()=>{
    console.log('Server running...')
})
app.use(express.json())
app.use(cors({origin:"*"}))




//Registration
app.post('/user/register',async(req,res)=>{
    try{
        const {name,email,phonenumber,fundsraised,password,workingprojects}=req.body;
        let exist = await User.findOne({email})
        if(exist){
            return res.status(400).send("Already registered");
        }
        const hashedPassword= bcrpyt.hashSync(password);
        let newUser = new User({
            name,
            email,
            phonenumber,
            fundsraised,
            workingprojects,
            password:hashedPassword,
        })

        await newUser.save();
        res.status(200).json(newUser);

    }
    catch(err){
        console.log(err);
        return res.status(400).send("failed")
    }
})
//login
app.post('/user/login',async(req,res)=>{
    try{
        const {email,password}=req.body;
        let exist = await User.findOne({email});
        if(!exist){
            return res.status(400).send("user not found");
        }
        const isPasswordCorrect= await bcrpyt.compareSync(password,exist.password);
        if(!isPasswordCorrect){
            return res.status(400).send("Bad credentials");
        }
        let payload={
            user:{
                id: exist.id
            }
        }
        jwt.sign(payload,'jwtSecret',{expiresIn:3600000},(err,token)=>{
            if(err) throw err
            return res.json({token,user:exist})
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).send("login fialed")
    }
})