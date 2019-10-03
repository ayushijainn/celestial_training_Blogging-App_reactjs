import React from "react";
import reactDOM from "react-dom";
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Form, Button } from "react-bootstrap";

class RegisterBox extends React.Component {

  constructor(props) {
        super(props);

        this.state = {
          email: "",
          password: "",
          Username: ""
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

      handleRegister = event => {
        const { email, Username, password} = this.state;
        event.preventDefault();
        this.props.onRegister(Username, email, password)
      }

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Register
        </div>
        <div className="box">
          <Form onSubmit={this.handleRegister.bind(this)}>
              <Form.Group controlId="Username" bsSize="large">
               <Form.Label>Username</Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                  placeholder="Enter Username"
                  value={this.state.Username}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="email" bsSize="large">
               <Form.Label>Email address</Form.Label>
                <Form.Control
                  
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
                Register
              </Button>
              
            </Form>
        </div>
      </div>
    );
  }
}

export default RegisterBox ;  