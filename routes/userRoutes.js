const express = require("express");
const bcrpyt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const Campaing = require("../models/campaing");
const authenticateToken = require("../middleware");
const router = express.Router();



//get user
router.get('/get/user', authenticateToken, (req, res) => {
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
//register

router.post("/register", async (req, res) => {
    try {
      const { name, email, phonenumber, gender, campaingname } = req.body;
      let exist = await User.findOne({ email });
      if (exist) {
        return res.status(400).send("Already registered");
      }
  
      // Generate a random password using UUID
      const password = uuidv4();
  
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
        isAdmin: false,
        isInternAccepted: false,
        campaings: [
          {
            campaing: campaing._id,
            fundscollected: "0",
            fundstonextmilestone: "0",
            mileStonesPassed: "0",
          },
        ],
        rewards: [
          {
            certificates: [],
            goodies: [],
            lor: [],
          },
        ],
      });
  
      await newUser.save();
  
      // Send email to the user with login credentials and Teams Meet link
      // Alternatively, you can configure the transporter with an SMTP server
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use the appropriate email service provider
    auth: {
      user: '2000032072cse@gmail.com', // Your email address
      pass: '' // Your email password or app-specific password
    }
  });
  
      const mailOptions = {
        from: '2000032072cse@gmail.com',
        to: email,
        subject: 'Registration Successful',
        html: `<p>Dear ${name},</p>
          <p>Your registration is successful!</p>
          <p>Your login credentials:</p>
          <p>Username: ${email}</p>
          <p>Password: ${password}</p>
          <p>Google Meet Link: [Insert Google Meet Link]</p>
          <p>Thank you for registering. Please login using the provided credentials.</p>`,
      };
      const mailOptionsMeet = {
        from: '2000032072cse@gmail.com',
        to: email,
        subject: 'Registration Successful You are invited to Orientation Session',
        html: `<p>Dear ${name},</p>
          <p>Your registration is successful!</p>
         <p>Your campaing Name ${campaingname}</p>
         <p>Microsoft Teams Meet Link: "https://teams.live.com/meet/9554197689565"</p>
          <p>Thank you for registering. Please login using the provided credentials.</p>`,
      };
  
      transporter.sendMail(mailOptionsMeet, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  
      campaing.users.push(newUser._id);
  
      await campaing.save();
  
      res.status(200).json(newUser);
    } catch (err) {
      console.log(err);
      return res.status(400).send("Failed");
    }
  });


  router.delete('/delete/user', authenticateToken, (req, res) => {
    const userId = req.user.id;
  
    User.findByIdAndDelete(userId)
      .then((deletedUser) => {
        if (!deletedUser) {
          return res.status(404).json({ error: 'User not found' });
        }
  
        // Optionally, you can also invalidate the token here if desired
  
        res.status(200).json({ message: 'User deleted successfully' });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to delete user' });
      });
  });
//login
router.post('/login',async(req,res)=>{
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
  module.exports = router;

  
  
