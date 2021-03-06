/**
 * Created by ron on 4/10/2015.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants = require('../constants/AppConstants'),
    objectAssign = require('react/lib/Object.assign'),
    EventEmitter = require('events').EventEmitter,
    fbRef = require('../utils/FirebaseUtils').homeInstance();

var CHANGE_EVENT = 'change';

var _state = {
    notes: [],
    user: ''
};

var addNote = function(note) {
    _state.notes.push(note);
};

var changeUser = function(newUserObj) {
    _state = {
        user: newUserObj.user,
        notes: newUserObj.notes
    };
};

var NotesStore = objectAssign({}, EventEmitter.prototype, {
    getState: function() {
        return _state;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(cb) {
        this.on(CHANGE_EVENT, cb);
    },

    removeChangeListener: function(cb) {
        this.removeListener(CHANGE_EVENT, cb);
    }
});

AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
        case AppConstants.ADD_NOTE:
            addNote(action.data);
            NotesStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.CHANGE_USER:
            changeUser(action.data);
            NotesStore.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    };
    return true;
});

module.exports = NotesStore;