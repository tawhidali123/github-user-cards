import axios from "axios";

let storage = window.localStorage;
let defaultState = JSON.parse(storage.getItem("users")); 

export let usersReducer = (state = defaultState, action) => {
    switch(action.type){
        case "ADD_USER" : 
            let users = [
                action.user,
                ...state
            ];

            storage.setItem("users", JSON.stringify([...users]));
            return users;


        case "REMOVE_USER" : 
            console.log("user Romoved")

        default : 
            return state;
    }
}


