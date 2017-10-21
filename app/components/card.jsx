import React, { Component } from "react";

let Card = ({login, name, avatar_url, bio, blog, public_repos, html_url}) => {

    let userLinks = () => {
        if (blog !== ""){
            return (
                <div>
                    <a href={ html_url } className="btn" target="_blank"> Github </a>
                    <a href={ blog } className="btn" target="_blank"> Personal </a>
                </div>
            )
        };

        return (
            <a href={ html_url } className="btn btn-github" target="_blank"> Github </a>
        );    
    }

    return (
        <div className="userCard">
            <div className="user-details">
                <div className="card-img--container">
                    <img src={ avatar_url }className="card-img" />
                </div> 
                <div className="user-imfo">
                    <h3 className="user-name"> { (name) ? name : login } </h3>
                    <p className="user-bio"> { (bio) ? bio : "Developer" } </p> 
                    <p className="user-repos"> <span> Repos : { public_repos } </span> </p>
                </div>
            </div>
            <div className="user-links">
                { userLinks() }
            </div>
        </div>
    )
}

export default Card;