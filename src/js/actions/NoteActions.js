/**
 * Created by ron on 4/10/2015.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants = require('../constants/AppConstants'),
    FirebaseUtils = require('../utils/FirebaseUtils');

var NoteActions = {
    addNote: function(noteObj) {
        AppDispatcher.handleAction({
            actionType: AppConstants.ADD_NOTE,
            data: noteObj.note
        });
        FirebaseUtils.addNote(noteObj);
    },

    changeUser: function(username) {

        FirebaseUtils.homeInstance().child(username).on('value', function(snapshot) {
            AppDispatcher.handleAction({
                actionType: AppConstants.CHANGE_USER,
                data: {
                    user: username,
                    notes: FirebaseUtils.toArray(snapshot.val())
                }
            });
        });
    }
};

module.exports = NoteActions;