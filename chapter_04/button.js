import React from "react";

const e = React.createElement;

class BuyButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {clicked:false};
    }

    render(){
        if (this.state.clicked) {return "구매완료"}

        return e(
            "button",
            {onclick:() => this.setState({clicked:true})},
            "긴급구매"
        );

    }
}
export default BuyButton;