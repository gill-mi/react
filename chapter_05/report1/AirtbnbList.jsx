import React from "react";
import Airbnb from "./Airbnb";

const cities = [
    {
        title:"서울",
        img: "서울.png",
        color: "#de3151",
        distance:2,
    },
    {
        title:"인천",
        img: "인천.png",
        color: "#cc2d4a",
        distance:29,
    },
    {
        title:"대구",
        img: "대구.png",
        color: "#d93b30",
        distance:237,
    },
    {
        title:"대전",
        img: "대전.png",
        color: "#bc1a6e",
        distance:140,
    },
];

function AirbnbList(){
    return(
        <div id="card_box">
            {cities.map((city)=>{
                return <Airbnb title = { city.title} 
                img = {city.img}
                color = {city.color}
                distance = {city.distance} />;
            })}
        </div>
    );
}

export default AirbnbList;