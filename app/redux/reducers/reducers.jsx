import axios from "axios";

export let addUserReducer = (state = [], action) => {
    switch(action.type){
        case "ADD_USER" : 
            return [
                action.user,
                ...state
            ];

        default : 
            return state;
    }
}

