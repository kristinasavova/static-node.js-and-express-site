// variables to require the necessary dependencies
const express = require ('express'); 

const app = express (); 

// a static route and the express.static method to serve the static files located in the public folder
app.use ('/static', express.static ('public'));

// set view engine to pug 
app.set ('view engine', 'pug'); 

const mainRoutes = require ('./routes/index');
const projectsRoutes = require ('./routes/projects');

app.use (mainRoutes);
app.use (projectsRoutes);

// if a user navigates to a non-existent route, or if a request fails for whatever reason
app.use ((req, res, next) => {
    const err = new Error ('Not Found');
    console.log ('Not Found', err);
    err.status = 404;
    next (err); 
});

// an error handler that sets the error message and status code
app.use ((err, req, res, next) => {
    res.status (err.status || 500);
    console.log ('Global error handler was called', err);
    res.render ('error', { error: err });
});

// start a server
app.set ('port', process.env.PORT || 3000);
const server = app.listen (app.get ('port'), () => {
    console.log (`Express server is listening on port ${server.address ().port}`);
});