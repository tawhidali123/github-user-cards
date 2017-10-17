import axios from "axios";

export let addUser = (user) => {
    return {
        type: "ADD_USER",
        user
    }
}


export let fetchUserData = (name) => {
    let userProfile = encodeURIComponent(name);
    
    return (dispatch) => {
        axios.get("https://api.github.com/users/" + userProfile).then((response) => {
            dispatch(addUser(response.data));
        }).catch((err) => {
            alert("USER NOT FOUND");
        })
    }
}