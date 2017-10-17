import redux, { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { addUserReducer} from "ReduxReducers";
import logger from 'redux-logger';
import thunk from "redux-thunk";



export let config = () => {
    
    let reducers = combineReducers({
        foundUsers: addUserReducer
    })

    let store = createStore( reducers, compose( 
        applyMiddleware(logger, thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
     ));

    return store;
}