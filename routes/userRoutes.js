const express = require("express");
const bcrpyt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const Campaing = require("../models/campaing");
const authenticateToken = require("../middleware");
const router = express.Router();




// router.get('/user', authenticateToken, (req, res) => {
//     const userId = req.user.id;
  
//     User.findById(userId)
//       .then((user) => {
//         if (!user) {
//           return res.status(404).json({ error: 'User not found' });
//         }
  
//         // Return the user object
//         res.status(200).json(user);
//       })
//       .catch((error) => {
//         res.status(500).json({ error: 'Failed to retrieve user' });
//       });
//   });


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
  
      // Send email to the user with login credentials and Google Meet link
      // Alternatively, you can configure the transporter with an SMTP server
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // SMTP server hostname
    port: 587, // SMTP server port
    secure: false, // Set to true for TLS/STARTTLS connection (port 465)
    auth: {
      user: 'bjahnavi5989@gmail.com', // Your email address
      pass: 'Indhu@2012' // Your email password or app-specific password
    }
  });
      const mailOptions = {
        from: 'bjahnavi5989@gmail.com',
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
        from: 'bjahnavi5989@gmail.com',
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