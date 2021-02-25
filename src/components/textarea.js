import React, {Component} from 'react';

class Textarea extends Component{
    constructor(props) {
        super(props);

        this.state = {
            errorMessage:"",
            paragraph:""            
        }
    }   

    getText = e =>{
        console.log(e.target.value)
    }

    render(){
        return(<div className="container">
                <div className="paragraph"></div>
                <div className="d-flex col-12">
                    <textarea className="player_text" cols="50" rows="10" onChange={this.getText.bind(this)}></textarea>
                </div>
        </div>)
    }
}
export default Textarea