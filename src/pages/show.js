import React from 'react';

class ShowPage extends React.Component {
    render(){
        const { note } = this.props;

        return (
            <div> 
                <h1>{ note.title } </h1>
                <div>{ note.body } </div>
            </div>
        )
    }
}


export default ShowPage
