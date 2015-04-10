/**
 * Created by ron on 4/10/2015.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants = require('../constants/AppConstants'),
    GithubUtils = require('../utils/GithubUtils');

var GithubActions = {
    getUserBio: function(username) {
        GithubUtils.getBio(username)
            .then(function(response) {
                AppDispatcher.handleAction({
                    actionType: AppConstants.GITHUB_USER_BIO,
                    data: response.data
                });
            });
    },

    getUserRepos: function(username) {
        GithubUtils.getRepos(username)
            .then(function(response) {
                AppDispatcher.handleAction({
                    actionType: AppConstants.GITHUB_USER_REPOS,
                    data: response.data
                });
            });
    },

    changeUser: function(username) {
        AppDispatcher.handleAction({
            actionType: AppConstants.GITHUB_CHANGE_USER,
            data: username
        });
    }
};

module.exports = GithubActions;