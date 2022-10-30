import React from "react";
import "./TimeSale.css";
import {SaleItems} from "./SaleItems.js";
import BuyButton from "./button.js";



function TimeSale(){
    return(
        <div className="wrapper">
            <ul>
                {SaleItems.map((item,index)=>{
                    return(
                        <li className="card" key={index}>
                            <img src = {item.img} className = "cardimg" alt="product" />
                            <div className="cardbody">
                                <h2 className="cardtime"> {getDeadline(item.time)} 마감예정! </h2> 
                                <h2 className="cardtitle"> {item.title} </h2>
                                <p className="carddescription">{item.description} </p> 
                                <h3 className="cardprice">
                                    <del style={{ color: "grey", fontSize:"1rem" }}>{item.oldprice}</del> {item.price} 
                                </h3>
                                <div className="button">
                                    <BuyButton />
                                </div>
                            </div>
                        </li>     
                    )
                })}
            </ul>
            
        </div>

    );

}


function getDeadline(endDate){
    let dead = new Date(endDate); /* 마감시간을 설정 */
    let current = new Date();
    let deadline = dead.getTime() - current.getTime();
    let hour = Math.floor(deadline / (1000 * 60 * 60));
    let min = Math.floor((deadline % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor(((deadline % (1000 * 60 * 60)) % (1000 * 60)) / 1000); // 초계산

    return hour.toString(10) + ":" + min.toString(10) + ":" + sec.toString(10); // 10진수 문자열로 표기 
}


export default TimeSale;