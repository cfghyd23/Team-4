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
  
       
  
        res.status(200).json({ message: 'User deleted successfully' });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to delete user' });
      });
  });

  router.delete('/delete/user', authenticateToken, (req, res) => {
    const userId = req.user.id;
  
    User.findById(userId)
      .then((user) => {
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
  
        // Check if the user is an admin
        if (!user.isAdmin) {
          return res.status(401).json({ error: 'Only admin users can delete users' });
        }
  
        // Proceed with user deletion
        User.findByIdAndDelete(userId)
          .then((deletedUser) => {
            if (!deletedUser) {
              return res.status(404).json({ error: 'User not found' });
            }
  
            res.status(200).json({ message: 'User deleted successfully' });
          })
          .catch((error) => {
            res.status(500).json({ error: 'Failed to delete user' });
          });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to retrieve user' });
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