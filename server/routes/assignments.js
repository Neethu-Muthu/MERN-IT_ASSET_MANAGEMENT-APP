// routes/assignments.js
const express = require('express');
const router = express.Router();
const Assignment = require('../models/Assignment');

// Create an assignment
router.post('/assignments', async (req, res) => {
    const { userId, assetId, assignmentDate } = req.body;
    try {
        const newAssignment = new Assignment({ userId, assetId, assignmentDate });
        await newAssignment.save();
        res.status(201).json(newAssignment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all assignments
router.get('/assignments', async (req, res) => {
    try {
        const assignments = await Assignment.find();
        res.json(assignments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
