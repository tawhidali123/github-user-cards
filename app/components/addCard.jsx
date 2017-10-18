
import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser, fetchUserData } from "Actions";

export class AddCard extends Component {

    state = {
        userName: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let name = this.state.userName;
        this.props.dispatch(fetchUserData(name));

        this.setState({
            userName: ""
        })
    }

    render(){
        let updateInputVal = (event) => {
            this.setState({
                userName: event.target.value
            })
        };
        
        let { userName } = this.state;

        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={ updateInputVal }  value={ userName }/>
                <input type="submit" value="Add"/> 
            </form>
        )
    }
}

export default connect( (state) => {
    return {
        users : state.foundUsers
    }
})(AddCard);