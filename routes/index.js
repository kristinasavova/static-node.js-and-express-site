// variables to require the necessary dependencies
const express = require ('express');
const router = express.Router (); 
const { projects } = require ('../data.json'); 

// an 'index' route to render the home page with the locals set to projects
router.get ('/', (req, res) => {
    res.render ('index', { projects });
});

// an 'about' route to render the about page
router.get ('/about', (req, res) => {
    res.render ('about');
});

module.exports = router; 