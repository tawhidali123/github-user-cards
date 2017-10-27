import axios from "axios";

let storage = window.localStorage;
let defaultState = JSON.parse(storage.getItem("users")) || [];

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
            let newUsers = state.filter((user) => {
                return user.id !== action.user.props.id
            })
            storage.setItem("users", JSON.stringify([...newUsers]));
            return newUsers;

        default : 
            return state;
    }
}


