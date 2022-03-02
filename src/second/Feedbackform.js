import React, {Component} from "react";
import "./style.css";

export class Feedbackform extends Component {

    state = {
        clicked:false,
        name:'',
        department:'',
        rating:'',
        count:1,
        array:[]
    };


    inputvalue = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    stateChange(val){
        this.setState({
            clicked:{val}
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const temp_obj = {
            name:this.state.name,
            department:this.state.department,
            rating:this.state.rating,
            count:this.state.count
        };

        this.state.array.push(temp_obj);

        this.setState({
            clicked:true,
            name:"",
            department:"",
            rating:"",
            count:this.state.count +1
        });    
    } 
    

    render(){
        return(
            <>
            <div id="main-container">
                <form>
                    <label className="formlabel" htmlFor="name">Name :    </label>
                    <input className="input-area" type="text" id="name" value={this.state.value} name="name" onChange={this.inputvalue}/>
                    <br />
                    <label className="formlabel" htmlFor="department">Department :</label>
                    <input className="input-area" type="text" name="department" value={this.state.value} id="department" onChange={this.inputvalue}/>
                    <br />
                    <label className="formlabel" htmlFor="rate">Rating :</label>
                    <input className="input-area" type="number" id="rating" value={this.state.value} name="rating" onChange={this.inputvalue}/>
                    <br />
                </form>
                <button id="submit-btn" type="submit" onClick={this.onSubmit.bind(this)}>Submit</button>
                <div id="dynamic-container">
                    {this.state.array.length>0 && this.state.array.map( (item) => {
                        return (
                            <div id="mini-container">
                                <h2> {item.count} : {item.name} || {item.department} || {item.rating}</h2>
                            </div>
                        );
                    })}
                    </div>
            </div>
            </>
        )
    }
}