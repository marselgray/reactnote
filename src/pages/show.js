import React from 'react';
import { Link } from 'react-router-dom';

class ShowPage extends React.PureComponent {

    componentWillMount() {
        if (!this.props.note) {
            this.props.history.replace(`/`);
            return;
        }
    }

    render() {
        const { note } = this.props;

        if (!note) {
            return null;
        }

        return (
            <div>
                <h1>{ note.title }</h1>
                <div>{note.body}</div>
                <br/><br/><br/>
                <div className="note-created">
                    <Link className="note-edit" to={`/notes/${note._id}/edit`}>Edit</Link>
                    <button className="btn" onClick={ (e) => this.props.onDelete(note._id) }>Delete</button>
                </div>
            </div>
        )
    }
}

export default ShowPage;