const express = require("express");
const bcrpyt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const Campaing = require("../models/campaing");
const router = express.Router();

// router.post("/register", async (req, res) => {
//   try {
//     let password="mypass";
//     const { name, email, phonenumber, gender,campaingname } =
//       req.body;
//     let exist = await User.findOne({ email });
//     if (exist) {
//       return res.status(400).send("Already registered");
//     }

//     const hashedPassword = bcrpyt.hashSync(password);

//     // Fetch campaingId using campaingname from the campaings table
//     const campaing = await Campaing.findOne({ campaingname: campaingname });

//     if (!campaing) {
//       return res.status(400).send("Invalid campaingname");
//     }

//     let newUser = new User({
//       name,
//       email,
//       phonenumber,
//       password: hashedPassword,
//       gender,
//       isAdmin: false,
//       isInternAccepted: false,
//       campaings: [
//         {
//           campaing: campaing._id,
//           fundscollected: "0",
//           fundstonextmilestone: "0",
//           mileStonesPassed: "0",
//         },
//       ],
//       rewards: [
//         {
//           certificates: [],
//           goodies: [],
//           lor: [],
//         },
//       ],
//     });

//     await newUser.save();

//     campaing.users.push(newUser._id);

//     await campaing.save();

//     res.status(200).json(newUser);
//   } catch (err) {
//     console.log(err);
//     return res.status(400).send("failed");
//   }
// });
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');

const transporter = nodemailer.createTransport({
  service: 'gmail', // Use the appropriate email service provider
  auth: {
    user: '2000032072cse@gmail.com', // Your email address
    pass: 'arbumjgsqhhnsoxr' // Your email password or app-specific password
  }
});


router.post("/register", async (req, res) => {
  try {
    const { name, email, phonenumber, gender, campaingname } = req.body;
    let exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).send("Already registered");
    }

    // Generate a random password using UUID
    const password = "";

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

    const mailOptions = {
      from: 'bjahnavi5989@gmail.com',
      to: email,
      subject: 'Registration Successful',
      html: `<p>Dear ${name},</p>
        <p>Your registration is successful!</p>
        <p>Your login credentials:</p>
        <p>Username: ${email}</p>
        <p>Password: ${password}</p>
        <p>Microsoft Teams Meet Link: "https://teams.live.com/meet/9554197689565"</p>
        <p>Thank you for registering. Please login using the provided credentials.</p>`,
    };
    const mailOptionsOrientation = {
      from: 'bjahnavi5989@gmail.com',
      to: email,
      subject: 'Registration Successful You are Invited to Orientation Session',
      html: `<p>Dear ${name},</p>
        <p>Your registration is successful!</p>
        <p>your campaing name ${campaingname}</P>
        <p>Your Gmail Link:</p>
        <p>Microsoft Teams Meet Link: "https://teams.live.com/meet/9554197689565"</p>
        <p>Thank you for registering. Please Make sure you join the orientation session on the time.</p>`,
    };

    transporter.sendMail(mailOptionsOrientation, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).send("Failed to send email");
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json(newUser);
      }
    });

    campaing.users.push(newUser._id);

    await campaing.save();
  } catch (err) {
    console.log(err);
    return res.status(400).send("Failed");
  }
});


//login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let exist = await User.findOne({ email });
    if (!exist) {
      return res.status(400).send("user not found");
    }
    const isPasswordCorrect = await bcrpyt.compareSync(
      password,
      exist.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).send("Bad credentials");
    }
    let payload = {
      user: {
        id: exist.id,
      },
    };
    jwt.sign(payload, "jwtSecret", { expiresIn: 3600000 }, (err, token) => {
      if (err) throw err;
      return res.json({ token, user: exist });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("login fialed");
  }
});

module.exports = router;
