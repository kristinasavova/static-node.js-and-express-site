// variables to require the necessary dependencies
const express = require ('express');
const router = express.Router (); 

// redirect to '/projects' if '/'
router.get ('/', (req, res) => {
    res.redirect ('/projects');
});

// an 'about' route to render the about page
router.get ('/about', (req, res) => {
    res.render ('about');
});

module.exports = router; 