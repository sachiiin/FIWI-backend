const express = require('express');
const router = express.Router();
const AdminUser = require('../models/AdminUser');

// Create a new admin user
router.post('/adminUsers', async (req, res) => {
  try {
    const { first_name, last_name, email, password, isApproved } = req.body;
    const newAdminUser = new AdminUser({ first_name, last_name, email, password, isApproved });
    await newAdminUser.save();
    res.status(201).json(newAdminUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all admin users
router.get('/adminUsers', async (req, res) => {
  try {
    const adminUsers = await AdminUser.find();
    res.status(200).json(adminUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
