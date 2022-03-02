import React,{Component} from "react";
import "./style.css";

class Ouptput extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return (
        <>
            <h1>Employee Data</h1>
            <div id="dynamic-container">
                    {this.props.data.map( (item) => {
                        return (
                            <div id="mini-container">
                                <h2> {item.count} : {item.name} || {item.department} || {item.rating}</h2>
                            </div>
                        );
                    })}
            </div>
            <button className="submit-btn" onClick={this.props.toggleFunc}>Go Back</button>
        </>
    )
    }
}

export default Ouptput;