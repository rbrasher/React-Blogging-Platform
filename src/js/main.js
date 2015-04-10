/**
 * Created by ron on 4/10/2015.
 */
var React = require('react'),
    Router = require('react-router'),
    routes = require('./config/routes');

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.getElementById('app'));
});