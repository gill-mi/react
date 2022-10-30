import React from "react";
import "./Airbnb.css";

function Airbnb(props){
    return(
        <div className="card">
            <div className="img-box">
                <img className="cardimg" src={props.img} />
            </div>

            <div className = "content" style={{backgroundColor:props.color}} >
                <strong className="title">{props.title}</strong>
                <p className="distance">{props.distance}km 거리</p>
            </div>
        </div>
    );
}

export default Airbnb;