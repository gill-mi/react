import React from "react";
import "./Movie.css";


function Movie(props){
    return(
        <div className="wrap">
            <div className="container">
                <img className = "poster" src={props.img}
                alt="moviePoster"/>
                
                <div className="contentbody" style={{backgroundColor:props.color}}>
                    <span className="mtitle">{props.title}</span>
                    <span className="myear">{props.year}</span>
                    <p className="mgenre">{props.genre}</p>
                    <p className="mstory">{props.story}</p>
                </div>
            </div>
            
        </div>
    );
}

export default Movie;