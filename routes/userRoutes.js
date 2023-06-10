const express = require("express");
const bcrpyt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const Campaing = require("../models/campaing");
const authenticateToken = require("../middleware");
const router = express.Router();


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

router.get('/user', authenticateToken, (req, res) => {
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


  module.exports = router;