import React from "react";
import reactDOM from "react-dom";
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Form, Button, Row, Container } from "react-bootstrap";
import LoginBox from "./LoginBox.js";
import RegisterBox from "./RegisterBox.js";

import ViewBlogs from './components/ViewBlogs.js'
import AddBlogs from './components/AddBlogs.js'
import Sidebar from "./Sidebar";
import "./css/Welcome.css";



const MainMenu = () => {
    return (
     <div className="buttons">
     <Link to="/components/AddBlogs">
       <button type="button" className="menu-btn"> Add Blogs </button>
      </Link>
      <br/>
      <Link to="/components/ViewBlogs">
       <button type="button" className="menu-btn"> View Blogs </button>
      </Link>
    </div>
  );
};

class Welcome extends React.Component
{

     constructor(props){
      super(props);

      this.state = {
        logout: false
      };
     }

    isLogout() {
      this.setState({Logout:true});
    }
    
render() {
return (
    <div>
      {(this.state.Logout) ?
         <Redirect to="/" />
         
      :

    <div className="welcomepage">
   
    
       <div className="menu">
          <Router>
            <div className="mainmenu" >
               <MainMenu/>
            </div> 

            <div className="linking" >
        
       

               <Route path="/components/ViewBlogs" component={ViewBlogs} />
               <Route path="/components/AddBlogs" component={AddBlogs} />
            
            </div>
          </Router>
        </div>
       
      
        <div className="signout">
          
          <a href="javascript:;" onClick={this.isLogout.bind(this)}>Sign out</a>
        </div>
      
    </div>
  }
  </div>
  );
 }
}

  

export default Welcome;