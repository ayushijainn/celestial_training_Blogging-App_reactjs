import React from "react";
import reactDOM from "react-dom";
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Form, Button } from "react-bootstrap";

class LoginBox extends React.Component {

  constructor(props) {
        super(props);

        this.state = {
          email: "",
          password: ""
        };
      }

      validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

      handleSignIn = async event => {
      event.preventDefault();
      this.props.onSignIn(this.state.email, this.state.password)
   }
     
  
  render() { 
    return (

      <div className="inner-container">
          <div className="header">
            Login
          </div>
        <div className="box">
          <Form onSubmit={this.handleSignIn.bind(this)}>
             
              <Form.Group controlId="email" bsSize="large">
               <Form.Label>Email address</Form.Label>
                <Form.Control
                  autoFocus
                  type="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                    
              </Form.Group>
              
              <Form.Group controlId="password" bsSize="large">
               <Form.Label>Password</Form.Label>
                <Form.Control
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  placeholder="password"
                />
              </Form.Group> 
            
              <Button
                block
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
              >
                Login
              </Button>
              
            </Form>
        </div>
      </div>
    );
  }
}

export default LoginBox;
  