import React, { Component } from "react";

class AddCard extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        let name = this.cardInput.value;



        this.cardInput.value = "";

        this.props.handleUser(name);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input ref={(input) => { this.cardInput = input }} />
                <input type="submit" value="Add"/> 
            </form>
        )
    }
}

export default AddCard;