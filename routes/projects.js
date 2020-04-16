const express = require ('express'); 
const router = express.Router ();
const { projects } = require ('../data.json'); 

router.get ('/projects/:id', (req, res) => {
    const { id } = req.params;
    res.render ('project', { id, projects });
});

module.exports = router; 