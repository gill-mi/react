import React, {useState, useEffect} from "react";

function Toggle(props){
    const [isToggleOn, setIsToggle] = useState(true);

    useEffect(() => {console.log("state 변수값 :" +isToggleOn);});

    function handleClick(){
        setIsToggle((isToggleOn)=>!isToggleOn);
        console.log("토글상태:", isToggleOn);
    }

    return <button onClick={handleClick}>
        {isToggleOn ? "클릭A" : "클릭B"}
    </button>;

}

export default Toggle;