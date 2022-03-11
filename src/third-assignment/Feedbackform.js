import React, {Component} from "react";
import "./style.css";
import Output from './Ouptput.js'

export class Feedbackform extends Component {

    constructor(props){
        super(props)
        this.state = {
            clicked:false,
            name:'',
            department:'',
            rating:'',
            count:1,
            array:[]
    };
}


    inputvalue = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }


    onSubmit = (event) => {
        event.preventDefault();
        let temp_obj = {
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
    
    toggleFormClick = () => {
        this.setState({clicked:!this.state.clicked})
    };

    render(){
        return(
            <div id="main-container">
            {!this.state.clicked ? 
                <>
                    <h1>EMPLOYEE FEEDBACK FORM</h1>
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
                    <button className="submit-btn" type="submit" onClick={this.onSubmit.bind(this)}>Submit</button>
                </form>
                </> :
                <Output data={this.state.array} toggleFunc={this.toggleFormClick} />
            }
            </div>
            
        )
    }
}