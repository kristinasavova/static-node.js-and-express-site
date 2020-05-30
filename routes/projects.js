// variables to require the necessary dependencies
const express = require ('express'); 
const router = express.Router ();
const { projects } = require ('../data.json'); 

// an 'index' route to render the '/projects' page with the locals set to projects
router.get ('/projects', (req, res) => {
    res.render ('index', { projects });
});

// redirect to '/projects' page if '/project'
router.get ('/project', (req, res) => {
    res.redirect ('/projects');
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