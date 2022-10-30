import React, {useState} from "react";
import "./GuestGreeting.css";

function GuestGreeting(props){
    const [userid, setUserId] = useState('');

    const onChange = (e) => {
        setUserId(e.target.value);
    }

    return ( <div>
        <h4>로그인하세요</h4>
        <input onChange={onChange} value = {userid}></input>
        <div className="text">
            {userid}
        </div>
    </div>);
}

export default GuestGreeting;