/**
 * Created by ron on 4/10/2015.
 */
var React = require('react'),
    NoteActions = require('../../actions/NoteActions'),
    NotesStore = require('../../stores/NotesStore');

var AddNote = React.createClass({
    getInitialState: function() {
        return {
            newNote: ''
        };
    },

    handleChange: function(e) {
        this.state({
            newNote: e.target.value
        });
    },

    handleSubmit: function() {
        var user = NotesStore.getState().user;
        NoteActions.addNote({
            user: user,
            note: this.state.newNote
        });

        this.setState({
            newNote: ''
        });
    },

    render: function() {
        return (
            <div className="input-group cushion">
                <input type="text" className="form-control" placeholder="Add Note" value={this.state.newNote} onChange={this.handleChange} />
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
                </span>
            </div>
        );
    }
});

module.exports = AddNote;