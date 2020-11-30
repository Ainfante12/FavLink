import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: " " ,
            URL: " "
        };
      /*
            TODO - set initial state for link name and URL 

        */
    }

    handleChange = event => {
       const {name, value} = event.target;

        this.setState({
            [name]: value
        }); 
        
        
        console.log("the input has changed")
        console.log(event.target.value)
        // this.setState({name: event.target.value})

        


        /*
            TODO - Logic for changing state based on form changes
        */
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        this.props.handleSubmit(this.state); 
        this.setState({
            name: "",
            URL: ""
        });

          console.log("button was clicked")
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

    }

    render() {
        const{ name , URL} = this.state;


        return(
            <form onSubmit={this.onFormSubmit}>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label>Name:</label>
                <input onChange={this.handleChange} type="text" name="name" value={name} ></input>
                <label >URL:</label>
                <input onChange={this.handleChange} type="text" name="URL" value={URL}></input>
                <button onClick= {this.onFormSubmit}>Submit</button> {/*have to add an onClick method that way when the button is clicked something happens} */}
            </form>
        )
    
    }
}

export default Form;
//onChange={this.handleChange} value={this.state.name}
//onChange={this.handleChange} value={this.state.URL}