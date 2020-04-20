// variables to require the necessary dependencies
const express = require ('express'); 
const router = express.Router ();

const { projects } = require ('../data.json'); 

// redirect to the home page if '/projects'
router.get ('/projects', (req, res) => {
    res.redirect ('/');
});

// dynamic 'project' routes based on the id of the project that render a customized version of the Pug project template 
router.get ('/projects/:id', (req, res, next) => {
    const { id } = req.params;
    const project = projects[id]; 
    if (id < projects.length) { // render project only if one exists
        res.render ('project', { project });
    } else { // if project doesn't exist, use error handler 
        const err = new Error ('Not Found');
        err.status = 404;
        next (err); 
    }
});

module.exports = router; 