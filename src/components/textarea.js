import React, {Component} from 'react';

class Textarea extends Component{
   
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
            enabled: false,
            value : "",
            charIndex:0,
            mistakes:0,
            accuracy:0,
             
        }

        console.log('props: ',props);
    }  

    componentWillReceiveProps(nextProps) {
		this.props = nextProps;       
	}
    
      
    getText = e =>{  
       
        let words = this.state.paragraph;
        let index = this.state.charIndex;
        let wordsLen = this.state.words;//no of words
        let accuracy = this.state.accuracy;
        let mistakes = this.state.mistakes; 
        let value = this.state.value;
        let length = this.state.length;

        
    }

    getValue = () =>{

    }

    start = () =>{
        console.log("START!",this.props)

        this.props.values.enabled = true;

        this.setState({
            enabled : this.props.values.enabled,
            words: this.props.values.words,
            duration: this.props.values.duration,
            length: this.props.values.length,
            paragraph : this.props.values.paragraph
        })

        let duration = this.props.values.duration;       

        //this.startTimer(duration);
    }

    startTimer = (duration) =>{
        const now = Date.now()
		const seconds = now + duration * 1000
		
        let interval = setInterval(() => {
			const secondLeft = Math.round((seconds - Date.now()) / 1000)
            
            console.log(secondLeft);
              this.setState({duration: secondLeft})
              if(secondLeft == 0){
                  clearInterval(interval);
              }
		}, 1000)        
    }
   
    
    render(){   
        let value = this.state.value;
        return(<div className="container">                                  
                <h5 className="text-white">Seconds left: {this.state.duration}</h5>                    
                 <button type="button" className="btn btn-info" onClick={this.start}>Start!</button>  
                 <div className="p-5">
                    { this.state.paragraph ?  <div className="paragraph"><h4>{this.state.paragraph? this.state.paragraph:null}</h4></div> :'' }
                 </div>                       
                <div className="col-12">
                    {
                        this.state.enabled ? 
                    
                    <textarea type="text" tab="0" className="form-control text-white" onKeyDown={this.getText.bind(this)}></textarea>
                    : ""
                    }
                    {
                        this.state.value != "" ?
                    
                        <div className="card">
                            <div className="card-body" tabIndex="0">{this.state.value ? this.state.value : null}</div>
                        </div>
                    : ""
                    }
                </div>
        </div>)
    }
}
export default Textarea