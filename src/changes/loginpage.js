import React from "react";
import reactDOM from "react-dom";
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Form, Button } from "react-bootstrap";
import LoginBox from "./LoginBox.js";
import RegisterBox from "./RegisterBox.js";
import Welcome from "./Welcome.js";

import ViewBlogs from './components/ViewBlogs.js'
import AddBlogs from './components/AddBlogs.js'
import Sidebar from "./Sidebar";





class Loginpage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
      user:null,
      items:[]
    };
  }

  showLoginBox() {
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  showRegisterBox() {
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }

  signIn(email,password)
{ 
  let val=0;
  for (let i = 0; i < this.state.items.length; i++) {
    if ((this.state.items[i].email == email) && (this.state.items[i].name == password)) {
      this.setState({
      user:{email,password}
              });
    this.props.save(this.email)

      
         
      
    val=1;
    } 
  }
    if(val===0){
     alert('incorrect');
    }
  
}



  Register(Username,email,password)
{
  this.setState({
    user:{
      Username,email,password
    }
  })
}

signOut(){
  this.setState({
    user:null
  })
}

componentDidMount() {
   
    fetch('https://jsonplaceholder.typicode.com/users')
       .then(res=>res.json())
       .then(json => {
          this.setState({
            items:json
          })
       });
}
  
   

  render() {
    var{ items}=this.state;
    let loginRegBox = null;
    
    if(this.state.isLoginOpen) {
       loginRegBox =  (<LoginBox path="/loginbox" onSignIn={this.signIn.bind(this)} />);
    } else if(this.state.isRegisterOpen) {
        loginRegBox = (<RegisterBox path="/registerbox" onRegister={this.Register.bind(this)}/>);
      }
     
    return (

      <div className="root-container">
       <Helmet bodyAttributes={{style: 'background-color:#dcc8c8;'}}/>
        
        
       {(this.state.user) ? 
            <Redirect to="/Welcome" 
             user={this.state.user} 
             onSignOut={this.signOut.bind(this)} 
            />
          :
          <div>
          <div className="display">

        email: Sincere@april.biz | password: Leanne Graham
       </div> 

        <div className="box-controller">
          
          <div
            className={"controller " + (this.state.isLoginOpen
            ? "selected-controller"
            : "")}
            onClick={this
            .showLoginBox
            .bind(this)}>
            Login
          </div>
           <div
            className={"controller " + (this.state.isRegisterOpen
            ? "selected-controller"
            : "")}
            onClick={this
            .showRegisterBox
            .bind(this)}>
            Register
          </div>
        </div>
 
        <div className="box-container">
        {loginRegBox}
       </div>
      </div>
        }
     </div>
       
    );

  }

}

export default Loginpage;