import React, { Component } from "react";
import CardList from "./cardList.jsx";
import AddCard from "./addCard.jsx";
import axios from "axios";

class MainComponent extends Component{
    state = {
        users : []
    };

    addUser = (user) => {

        let userProfile = encodeURIComponent(user);

        axios.get("https://api.github.com/users/" + userProfile).then((response) => {

            this.setState((prevState, props) => {
                return {
                    users : prevState.users.concat([ response.data ])
                }
            })

        }).catch((reject) => {
            console.log("Reject :", reject)
        })

    }

    render(){
        
        return (
            <div>
                <AddCard handleUser={ this.addUser }></AddCard>
                <CardList ></CardList>
            </div>
        )
    }
}


export default MainComponent;