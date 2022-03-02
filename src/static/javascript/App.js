import React, {Component} from "react";
import {Feedbackform} from "./Feedbackform";
import "./style.css"

class App extends Component{
    render(){
        return(
            <div>
                <h1>EMPLOYEE FEEDBACK FORM</h1>
                <Feedbackform />
            </div>
        )
    }
}

export default App;
