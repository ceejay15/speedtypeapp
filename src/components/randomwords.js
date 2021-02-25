import React, {Component} from 'react';
import axios from 'axios';

class RandomWords extends Component{
    constructor(props){
        super(props)

        this.state = {
            post : [],
            errorMessage: "",
            level :0,
            paragraph:"",
            duration: 0,
            wpm:0,
            accuracy:0,
            datetime: "",
            completed:false
            
        }
    }

    componentDidMount(){
        axios.get("https://gist.githubusercontent.com/ceejay15/3d7033b3aba7675a51f4afa20eeceb8e/raw/be7fe5dde8ef48d3ea5a7ead3ca43a70b2dd9efc/random_words.json")
        .then(respond=>{
            console.log(respond?.data?.beginner?.paragraphs[2]?.words);

            this.setState({
                paragraph: respond?.data?.beginner?.paragraphs[2]?.words
            })

           
        })
        .catch(error=>{
            //console.log(error);
            this.setState({errorMessage: "There is a problem connecting to API!"})
            console.log(this.state.errorMessage);
            
        })
    }

    render(){
        return(<div>Paragraph:
               <div className="paragraph">
                {this.state.paragraph ? this.state.paragraph : null} 
                <br/><textarea name="paragraph"></textarea>
               </div>
              <div>{this.state.errorMessage ? this.state.errorMessage : null}</div>
        </div>)
    }
}
export default RandomWords