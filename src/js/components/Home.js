/**
 * Created by ron on 4/10/2015.
 */
var React = require('react'),
    GithubActions = require('../actions/GithubActions'),
    SearchGithub = require('./SearchGithub');

var Home = React.createClass({

    render: function() {
        return (
            <div>
                <div className="row">
                    <div className="text-center">
                        <h1>Enter a Github User</h1>
                    </div>
                </div>
                <div className="col-md-offset-3">
                    <SearchGithub />
                </div>
                <div className="col-md-12 text-center">
                    <h5> *Source code can be found <a href="http://github.com/rbrasher/React-Blogging-Platform">here</a></h5>
                </div>
            </div>
        );
    }
});

module.exports = Home;
