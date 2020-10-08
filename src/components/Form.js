import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

    }

    render() {

        return(
            <form>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label>Name:</label>
                <input type="text"></input>
                <label >URL:</label>
                <input type="text"></input>
                <button>Submit</button> {/*have to add an onClick method that way when the button is clicked something happens} */}
            </form>
        )
    
    }
}

export default Form;
