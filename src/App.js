import React, { Component } from "react";
import Classcomp from "./Classcomp";
import Functionalcom from "./Functionalcom";
import './style.css'


class App extends Component{
    state={
        functioncomp:false,
        classcomp:false
    }
    functioncomp=()=>{
        this.setState({
        functioncomp:!this.state.functioncomp
        })
    }
    classcomp=()=>{
        this.setState({
        classcomp:!this.state.classcomp
        })
    }

    render(){
    return(
    <>
    <h1>Styling using Functional and Class Component</h1>
    
    <button className="btn1" onClick={this.functioncomp}>To see styling in functional component</button>
    <button className="btn2" onClick={this.classcomp}>To see styling in class component</button>
    <div className="maincontainer">
    {this.state.functioncomp? <Functionalcom /> :null}
    {this.state.classcomp?<Classcomp/>:null}
    </div>
    </>
    )
}
}

export default App






