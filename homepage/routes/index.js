const express = require('express');
const router = express.Router();
// Homepage route
router.get('/index', (req, res) => {
    res.render('index'); // Render the index.ejs view
});
module.exports = router;
