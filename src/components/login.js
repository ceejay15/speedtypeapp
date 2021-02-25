import React, {Component} from 'react';
// import axios from 'axios';

class Login extends Component{
  constructor(props){
      super(props)
         
        // this.state = {
        //       username:'',
        //       player1:'',
        //       player2:'',
        //       errorMessage:''
        //   }
  }

  render(){
      return(<div className="container text-center login-container"> 
                <form className="form-group" noValidate action="#">                  
                    <div className="m-3">                                           
                        <input type="text" name="username" placeholder="Enter your username" className="form-control text-white"/>
                    </div>
                    <br/>
                    <div className="m-3">                                           
                        <input type="password" name="password" placeholder="Enter your password" className="form-control text-white"/>
                    </div>
                    <div class="m-3"><button type="submit" className="btn btn-dark btn-lg">Submit</button></div>
                </form>
    </div> )
  }
}
export default Login