import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            favLinks: []
        };
        /* TODO - Create state object for storing favLinks */
    }

    removeCharacter = index => {

        this.setState(({ favLinks }) => ({
            favLinks: favLinks.filter((_, i) => i !== index)
          }));
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
    }

    handleSubmit = favLink => {

        this.setState(({ favLinks }) => ({
            favLinks: [favLink, ...favLinks]
          }));
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
    }

    render() {
        const favLinks = this.state.favLinks;

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                {/*Since LinkContainer is the parent, we have to add both the Table and Form component */}
                {/*TODO - Add Table Component */}
                 <Table linkData={favLinks} removeLink={this.removeCharacter}/>
                
                <br/>

                <h3>Add New</h3>
                {/*TODO - Add Form Component */}
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default LinkContainer;