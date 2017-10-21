
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
            <div className="add-card">
                <img className="github-img" src="assets/img/github.png"/>   
                <form className="add-user-form"onSubmit={this.handleSubmit}>
                    <input type="text" onChange={ updateInputVal }  value={ userName } placeholder="Search Github Profile" autoFocus/>
                    <input type="submit" value="Add"/> 
                </form>
            </div>
        )
    }
}

export default connect( (state) => {
    return {
        users : state.foundUsers
    }
})(AddCard);