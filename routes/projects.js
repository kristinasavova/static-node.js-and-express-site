const express = require ('express'); 
const router = express.Router ();
const { projects } = require ('../data.json'); 

router.get ('/projects/:id', (req, res) => {
    const { id } = req.params;
    const project = projects[id];  
    // versuch mal for loop
    res.render ('project', { project });
});

module.exports = router; 