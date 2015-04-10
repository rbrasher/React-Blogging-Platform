/**
 * Created by ron on 4/10/2015.
 */
var React = require('react'),
    Home = require('./Home'),
    Header = require('./Header'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler;

var App = React.createClass({

    render: function() {
        return (
            <div className="main-container">
                <Header />
                <div className="container inner-container">
                    <RouteHandler />
                </div>
            </div>
        );
    }
});

module.exports = App;