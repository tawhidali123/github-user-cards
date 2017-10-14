import React, { Component } from "react";

class AddCard extends Component {

    state = {
        userName: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let name = this.state.userName;
        this.props.handleUser(name);

        this.setState({
            userName: ""
        })
    }

    render(){
        

        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={ (event) => {
                    this.setState({
                        userName: event.target.value
                    })
                }}  value={ this.state.userName }/>
                <input type="submit" value="Add"/> 
            </form>
        )
    }
}

export default AddCard;