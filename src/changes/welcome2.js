
import React from "react";
import reactDOM from "react-dom";
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Form, Button } from "react-bootstrap";
import LoginBox from "./LoginBox.js";
import RegisterBox from "./RegisterBox.js";

import Contact from './components/Contact.js'
import info from './components/info.js'
import Sidebar from "./Sidebar";
import HomeNav from "./HomeNav";
import DashboardNav from "./DashboardNav";
import MainScreen from "./MainScreen";


const MainMenu = () => {
    return (
     <div className="buttons">
      
      
      
      <Link to="/components/Contact">
        <button type="button" className="menu-btn">contact</button>
      </Link>
      <Link to="/components/info">
        <button type="button" className="menu-btn">info</button>
      </Link>
    </div>
  );
};

const Welcome = ({user, onSignOut})=> {
  // This is a dumb "stateless" component
  return (
    <div>
  <div>
    <div style={{ display: "flex" }}>
      
      <Sidebar>
        <Router>
            <Route exact path="/HomeNav" component={HomeNav} />
            <Route exact path="/login/DashboardNav" component={DashboardNav} />
          //<HomeNav path="/*" />
          //<DashboardNav path="dashboard/*" />
        </Router>
      </Sidebar>
      
      <MainScreen/>

      
    </div>
  </div>
      <div className="menu">
      <Router>
       <div className="mainmenu">
        <MainMenu/>
       </div> 
        <div className="linking">
        
            
            <Route path="/components/Contact" component={Contact} />
            <Route path="/components/info" component={info} />
            
          </div>
          </Router>
      </div>
      <div className="signout">
      Welcome <strong>{user.Username}</strong>!
      <a href="javascript:;" onClick={onSignOut}>Sign out</a>
      </div>
    </div>
  )
}

export default Welcome;

///////////////////////////////////////////////////////


import React from "react";
import reactDOM from "react-dom";
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Form, Button } from "react-bootstrap";
import LoginBox from "./LoginBox.js";
import RegisterBox from "./RegisterBox.js";

import Contact from './components/Contact.js'
import info from './components/info.js'
import Sidebar from "./Sidebar";


const MainMenu = () => {
    return (
     <div className="buttons">
      
      
      
      <Link to="/components/Contact">
        <button type="button" className="menu-btn">contact</button>
      </Link>
      <Link to="/components/info">
        <button type="button" className="menu-btn">info</button>
      </Link>
    </div>
  );
};

const Welcome = ({user, onSignOut})=> {
  // This is a dumb "stateless" component
  return (
    <div>
  
    <div style={{ display: "flex" }}>
      
      <Sidebar>
        <div className="menu">
      <Router>
       <div className="mainmenu">
        <MainMenu/>
       </div> 
        <div className="linking">
        
            
            <Route path="/components/Contact" component={Contact} />
            <Route path="/components/info" component={info} />
            
          </div>
          </Router>
      </div>
      </Sidebar>
        
    </div>
  
      
      <div className="signout">
      Welcome <strong>{user.Username}</strong>!
      <a href="javascript:;" onClick={onSignOut}>Sign out</a>
      </div>
    </div>
  )
}

export default Welcome;


////////////////////////////////////////////////////////

import React from "react";
import reactDOM from "react-dom";
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Form, Button } from "react-bootstrap";
import LoginBox from "./LoginBox.js";
import RegisterBox from "./RegisterBox.js";

import ViewBlogs from './components/ViewBlogs.js'
import AddBlogs from './components/AddBlogs.js'
import Sidebar from "./Sidebar";
import "./css/Welcome.css";



const MainMenu = () => {
    return (
     <div className="buttons">
      <Link to="/components/ViewBlogs">
       <button type="button" className="menu-btn"> View Blogs </button>
      </Link><br/>
      <Link to="/components/AddBlogs">
       <button type="button" className="menu-btn"> Add Blogs </button>
      </Link>
    </div>
  );
};

const Welcome = ({user, onSignOut})=> {
  // This is a dumb "stateless" component
  return (
    <div>
  
    
      
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
      Welcome !
      <a href="javascript:;" onClick={onSignOut}>Sign out</a>
      </div>
   
    </div>
  )
}

export default Welcome;