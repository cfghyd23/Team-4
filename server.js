const express = require('express');
const mongoose = require('mongoose')
const bcrpyt = require('bcryptjs');
const User = require('./models/user');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors')
const Campaing = require('./models/campaing');
const authenticateToken = require('./middleware'); // Assuming your token decoding middleware is in authenticateToken.js




mongoose.connect("mongodb+srv://root:root@cluster0.37xkg4e.mongodb.net/Marpu?retryWrites=true&w=majority").then(()=>console.log("DB connected"))
app.listen(5000,()=>{
    console.log('Server running...')
})
app.use(express.json())
app.use(cors({origin:"*"}))





app.post('/user/register', async (req, res) => {
  try {
    const { name, email, phonenumber, gender, password, campaingname } = req.body;
    let exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).send("Already registered");
    }

    const hashedPassword = bcrpyt.hashSync(password);

    // Fetch campaingId using campaingname from the campaings table
    const campaing = await Campaing.findOne({ campaingname: campaingname });

    if (!campaing) {
      return res.status(400).send("Invalid campaingname");
    }

    let newUser = new User({
      name,
      email,
      phonenumber,
      password: hashedPassword,
      gender,
      isAdmin : false,
      isInternAccepted:false,
      campaings: [
        {
          campaing: campaing._id,
          fundscollected: "0",
          fundstonextmilestone: "0",
          mileStonesPassed: "0"
        }
      ],
      rewards: [
        {
            certificates: [ ],
            goodies: [ ],
            lor: [ ]
        }
      ]
    });
    // Add the user ID to the userIds array of the campaign
    
    await newUser.save();

    campaing.users.push(newUser._id);
    await campaing.save();
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    return res.status(400).send("failed");
  }
});

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


// Create a new campaign
app.post('/campaigns', (req, res) => {
    const { campaingname, totalFund } = req.body;
  
    // Check if the user is an admin
    const userId = req.headers['user-id']; // Assuming the user ID is passed in the request header
    User.findById(userId)
      .then((user) => {
        if (!user || !user.isAdmin) {
          return res.status(401).json({ error: 'Only admins can add campaign details' });
        }
  
        const campaign = new Campaing({
          campaingname,
          totalFund,
          users: [],
          adminOnly: true,
        });
  
        campaign.save()
          .then((result) => {
            res.status(201).json(result);
          })
          .catch((error) => {
            res.status(500).json({ error: 'Failed to create campaign' });
          });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to authenticate user' });
      });
  });


// Endpoint to get user object based on JWT token
  app.get('/user', authenticateToken, (req, res) => {
    const userId = req.user.id;
  
    User.findById(userId)
      .then((user) => {
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
  
        // Return the user object
        res.status(200).json(user);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to retrieve user' });
      });
  });
  
  