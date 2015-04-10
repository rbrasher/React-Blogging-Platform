/**
 * Created by ron on 4/10/2015.
 */
var React = require('react'),
    NotesStore = require('../../stores/NotesStore'),
    AddNote = require('./AddNote'),
    NotesList = require('./NotesList'),
    NoteActions = require('../../actions/NoteActions');

var Notes = React.createClass({
    getInitialState: function() {
        return {
            notes: NotesStore.getState().notes
        };
    },

    componentWillReceiveProps: function(obj) {
        //invoked whenever the route changes usernames
        NoteActions.changeUser(obj.username);
    },

    componentDidMount: function() {
        NoteActions.changeUser(this.props.username);
        NotesStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        NotesStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState({
            notes: NotesStore.getState().notes
        });
    },

    render: function() {
        return (
            <div>
                <h3>Notes for {this.props.username}</h3>
                <AddNote username={this.props.username} />
                <NotesList notes={this.state.notes} />
            </div>
        );
    }
});

module.exports = Notes;