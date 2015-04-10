/**
 * Created by ron on 4/10/2015.
 */
var React = require('react');

var NotesList = React.createClass({

    render: function() {
        var notes = this.props.notes.map(function(note) {
            return (
                <li className="list-group-item" key={note.id}>{note}</li>
            );
        });

        return (
            <ul className="list-group">
                {notes}
            </ul>
        );
    }
});

module.exports = NotesList;