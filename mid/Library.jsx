import React from "react";
import Book from "./Book";

function Libray(){
    return(
        <div>
            <Book name="fnfn" numOfPage={300} />
            <Book name="호호" numOfPage={50}/>
        </div>
    );
}

export default Libray;