import React, {Component} from "react";

class Mycomponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }
    }
render(){
    return(
        <div>Count: {this.state.count}</div>
    )
}


}

export default Mycomponent;