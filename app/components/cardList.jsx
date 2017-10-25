import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./card.jsx";


class CardList extends Component{
    state = {};

    render(){
        
        let {gitProfiles, dispatch} = this.props;

        let showUser = () => {
           return gitProfiles.map((profile, index) => {
                return  <Card key={index} { ...profile } ></Card>
            })
        }

        return (
            <div className="cards-list">
                { showUser() }
            </div>
        )
    }
}

export default connect( (state) => {
    return {
        gitProfiles: state.foundUsers
    }
} )(CardList);