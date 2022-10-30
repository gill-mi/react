import React, {useState} from "react";
import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "./LoginControl.css"


function LoginControl(){
    const [count, setCount] = useState(1);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLoginClick = () => { setIsLoggedIn(true);};
    const handleLogoutClick = () => { setIsLoggedIn(false);};

    const onIncrease = () =>{
        setCount((count) => count+1);
        console.log("isLoggedIn : " + isLoggedIn);
        console.log("버튼 클릭" + count+" 회");
    };

    let button;
    if (isLoggedIn) { button =<LogoutButton onClick={()=>{handleLogoutClick(); onIncrease()}}/>; }
    else { button = <LoginButton onClick={()=>{handleLoginClick(); onIncrease() }} />;}

    return(
        <div className="login">
            <Greeting isLoggedIn={isLoggedIn} /> {button}
        </div>
    );
}

export default LoginControl;

