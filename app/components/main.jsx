import React, { Component } from "react";
import CardList from "./cardList.jsx";
import AddCard from "./addCard.jsx";
import axios from "axios";

import { Provider, connect } from "react-redux";
import { config } from "ReduxStore";

let store = config();

const MainComponent = (props) => {
    return (
        <Provider store={ store }> 
            <div className="app">
                <AddCard></AddCard>
                <CardList ></CardList>
            </div>
        </Provider>
    )
}

export default MainComponent;
