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
            }
        }

        let showGitList = (users, fn) => {
            if(users.length){
                return(
                    <div className="cards-list">
                        { fn(users) }
                     </div> 
                )
            }else{
                return <h1 style={ { textAlign: "center" } }> Please Search For Users </h1>
            }
        }

        return (
            <div>
                { showGitList(gitProfiles, showUser) }
            </div>
        )
    }
}

export default connect( (state) => {
    return {
        gitProfiles: state.foundUsers
    }
} )(CardList);