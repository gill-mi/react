import React from "react";

function Book(props){
    return(
        <div>
            {/* //<h1>{`책 이름은 ${props.name}입니다.`}</h1> */}
            <h1>책 이름은 {props.name}입니다.</h1>
            <h2>총 {props.numOfPage} 페이지 입니다.</h2>
        </div>
    );
}

export default Book;