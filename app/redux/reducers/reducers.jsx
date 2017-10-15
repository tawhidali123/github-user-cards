import axios from "axios";

export let addUserReducer = (state = [], action) => {
    switch(action.type){
        case "ADD_USER" : 

            let userProfile = encodeURIComponent(action.user);
            

            console.log(userProfile);

            axios.get("https://api.github.com/users/" + userProfile).then((response) => {
                
                console.log( [
                    ...state,
                    {
                        ...response.data
                    }
                ]   
            )
            }).catch((reject) => {
                console.log("Reject :", reject)
            });

            return;




        default : 
            return state;
    }
}