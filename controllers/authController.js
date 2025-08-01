// controllers/authController.js
const fs = require('fs');
const path = require('path');

function login(req, res) {
    const { username, password } = req.body;
    const usersPath = path.join(__dirname, '../users.json');
    fs.readFile(usersPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, error: 'Unable to read users file.' });
        }
        try {
            const users = JSON.parse(data);
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                res.json({ success: true, user: { username: user.username } });
            } else {
                res.json({ success: false });
            }
        } catch (parseErr) {
            res.status(500).json({ success: false, error: 'Error parsing users data.' });
        }
    });
}

module.exports = { login };
