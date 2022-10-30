import React, {useRef, useEffect, useState} from "react";

function MyLotto(){
    const numOfLotto = useRef(1);
    
    const handler = (str, event) => {
        const text = `${numOfLotto.current} 회차 ${str} ${event.target.value}`; 
        console.log(text);
        alert(text);
        numOfLotto.current = numOfLotto.current+1;
    };

    useEffect(() => {console.log(">>>>>>렌더링 되었습니다!!!!<<<<<<<");});
    useEffect(() => {console.log(">>>>>>마운트 되었습니다!!!!<<<<<<<");
                    return() => console.log(">>>>>>>언마운트 되었습니다!!!!!<<<<<<<"); },[]);



    return(
        <button 
            value="홍길동"
            onClick = {(event) => handler("당첨자 :", event)}>
                당첨자 확인
            </button>
    );
}

export default MyLotto;