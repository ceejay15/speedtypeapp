import React, {Component} from 'react';
import axios from 'axios';
import Textarea from './textarea';

class Game extends Component{
    constructor(props) {
        super(props);

        this.state = {
            errorMessage:"",
            paragraph:"",
            length:0,            
        }
    }   

    componentDidMount(){
        axios.get("https://gist.githubusercontent.com/ceejay15/3d7033b3aba7675a51f4afa20eeceb8e/raw/be7fe5dde8ef48d3ea5a7ead3ca43a70b2dd9efc/random_words.json")
        .then(respond=>{
            console.log(respond?.data?.beginner?.paragraphs[2]?.words);

            this.setState({                
                length: respond?.data?.beginner?.paragraphs.length
            })
           
           this.randomwords(respond?.data?.beginner?.paragraphs);
           
        })
        .catch(error=>{
            //console.log(error);
            this.setState({errorMessage: "There is a problem connecting to API!"})
            console.log(this.state.errorMessage);
            
        })
    }

    randomwords(paragraph){
        let len = this.state.length;
        let index = Math.floor(Math.random() * len);

        console.log('length::',this.state.length, "index ", index, paragraph[index].words);
        this.setState({paragraph:paragraph[index].words})
        
    }

    render(){
        return(<div className="container">
                <h5 className="text-white">{this.state.errorMessage ? this.state.errorMessage : null}</h5>                
                <div className="d-flex col-12">                    
                    <div className="col-6">
                       <div className="paragraph"><h4>{this.state.paragraph? this.state.paragraph:null}</h4></div>
                        <Textarea name="player1" player="player1"/>
                    </div>
                    <div className="col-6">
                      <div className="paragraph"><h4>{this.state.paragraph? this.state.paragraph:null}</h4></div>
                       <Textarea name="player2" player="player2"/>
                    </div>
                </div>
        </div>)
    }
}
export default Game