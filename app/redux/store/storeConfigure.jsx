import redux, { createStore, combineReducers, compose } from 'redux';
import { addUserReducer } from "ReduxReducers";

export let config = () => {
    let store = createStore( addUserReducer, compose( 
        window.devToolsExtension ? window.devToolsExtension() : f => f
     ));

    return store;
}