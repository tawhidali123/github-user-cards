import React, { Component } from "react";

const Card = ({ img, name, company }) => {
    return (
        <div>
            <img src={ "http://placehold.it/75" } className="card-img" /> 
            <div style={{display: "inline-block"}}>
                <div className="card-name">Ziaul { name } </div>
                <div className="card-company"> Peppercomm { company } </div>
            </div>
        </div>
    )
}

export default Card;