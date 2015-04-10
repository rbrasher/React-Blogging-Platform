/**
 * Created by ron on 4/10/2015.
 */
var Firebase = require('firebase'),
    AppConstants = require('../constants/AppConstants');

var firebaseUtils = {
    homeInstance: function() {
        return new Firebase(AppConstants.FIREBASE_HOST);
    },

    addNote: function(noteObj) {
        this.homeInstance().child(noteObj.user).push(noteObj.note);
    },
    toArray: function(obj) {
        var arr = [];

        for(var key in obj) {
            arr.push(obj[key]);
        }

        return arr;
    }
};

module.exports = firebaseUtils;