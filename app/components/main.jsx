import React, { Component } from "react";
import CardList from "./cardList.jsx";
import AddCard from "./addCard.jsx";
import axios from "axios";

import { Provider, connect } from "react-redux";
import { config } from "ReduxStore";

let store = config();

console.log(store.getState())

class MainComponent extends Component{

    render(){
        
        return (
            <Provider store={ store }> 
                <div>
                    <AddCard></AddCard>
                    <CardList ></CardList>
                </div>
            </Provider>
        )
    }
}


export default MainComponent;
