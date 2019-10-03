import React from "react";
import reactDOM from "react-dom";
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Helmet from 'react-helmet';
//import { Form, Button } from "react-bootstrap";
import Loginpage from "./Loginpage.js";
//import LoginBox from "./LoginBox.js";
import Welcome from "./Welcome.js"






class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:null,
      email:null
      };
 }

  savedata(email)
{
  this.setState({user: {email}})

}


  render() {
       return (
            <div className="main">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <Router>
                            <div>
                                <Route exact path="/" render={()=> <Loginpage save={this.savedata.bind(this)}/> } />
                                <Route path="/Welcome" component={Welcome} />

                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}






reactDOM.render(
  <App/>, document.getElementById("root"));
export default App;