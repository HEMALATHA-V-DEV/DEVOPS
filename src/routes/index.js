const express = require('express');
const router = express.Router();
const path = require('path');

// Serve index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Serve contacts
router.get('/contacts', (req, res) => {
    res.json({ message: 'Contacts endpoint' });
});

module.exports = router;
