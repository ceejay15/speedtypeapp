import React, {Component} from 'react';
import axios from 'axios';
import Textarea from './textarea';
import { randomwords } from '../test_data/random_words.js';

class Game extends Component{
    constructor(props) {
        super(props);

        this.state = {
            errorMessage:"",
            paragraph:"",
            length:0,   
            level:0,
            duration:0,
            completed:false,
            words:0,   
            enabled: false      
        }
    } 

    componentDidMount(){
        axios.get("https://gist.githubusercontent.com/ceejay15/3d7033b3aba7675a51f4afa20eeceb8e/raw/be7fe5dde8ef48d3ea5a7ead3ca43a70b2dd9efc/random_words.json")
        .then(respond=>{           

            let index = this.randomwords(respond?.data?.beginner?.paragraphs.length);

            this.setState({
                length : respond?.data?.beginner?.paragraphs.length,
                level: 1,
                duration:20,
                paragraph: respond?.data?.beginner?.paragraphs[index]?.words,
                words: respond?.data?.beginner?.paragraphs[index]?.words?.length
            })           
        })
        .catch(error=>{           
            this.setState({errorMessage: "There is a problem connecting to API!"})
            console.log(this.state.errorMessage);
        })        
    }

    randomwords = (len) =>{
        let index = Math.floor(Math.random() * len);
        return index;
    }

    render(){
        return(
            <div className="container">
                <h4 className="text-white">Level : {this.state.level = 1 ? "Beginner" : null}  </h4>               
                <div className="p-1">  
                  <h5 className="text-white">{this.state.errorMessage ? this.state.errorMessage : null}</h5>                           
                    <div className="col-12">                       
                        <Textarea values={this.state.duration !== 0 ? this.state : null}/>
                    </div>
                </div>
        </div>
        )
    }


	
}

export default Game