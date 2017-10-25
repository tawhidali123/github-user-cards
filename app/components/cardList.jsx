import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./card.jsx";


class CardList extends Component{
    state = {};

    render(){
        
        let {gitProfiles, dispatch} = this.props;

        let showUser = (profiles) => {
            if(profiles && profiles.length){
                return profiles.map((profile, index) => {
                    return  <Card key={index} { ...profile } ></Card>
                })
            }else{
                return <h1 style={{textAlign:"center"}}> Plese Search For a User </h1>
            }


        }

        return (
            <div className="cards-list">
                { showUser(gitProfiles) }
            </div>
        )
    }
}

export default connect( (state) => {
    return {
        gitProfiles: state.foundUsers
    }
} )(CardList);