/**
 * Created by ron on 4/10/2015.
 */
var React = require('react'),
    App = require('../components/App'),
    Home = require('../components/Home'),
    Profile = require('../components/Profile'),
    Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    Route = Router.Route;

module.exports = (
    <Route name="app" path="/" handler={App}>
        <Route name="profile" path="profile/:username" handler={Profile} />
        <DefaultRoute handler={Home} />
    </Route>
);