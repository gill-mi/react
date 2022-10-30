import React from "react";
import Movie from "./Movie";
import { Movies } from "./Movies";
import "./Bar.css";

function MovieList(){
    return(
        <div>
            <div className="bar">
                <strong>무비스토리</strong>
            </div>
            <div>
                {Movies.map((item)=>{
                    return <Movie title = {item.title} img = {item.img} genre = {item.genre} year = {item.year} story = {item.story} color = {item.color}/>;
                })}
            </div>
        </div>
    );
}

export default MovieList;