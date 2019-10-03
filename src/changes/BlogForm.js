import React from "react";
import { Form, Button } from "react-bootstrap";
import reactDOM from "react-dom";

export default class BlogForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: " "
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   

    handleChange(event) {
    this.setState({title: event.target.value});
  }

   handleSubmit = async event => {
   	event.preventDefault();
   	const userObj = {
   		title: this.state.title
   	}
    localStorage.setItem('objblog', JSON.stringify(userObj));
    
   }

  render() {
  	return(
        
          <form onSubmit={this.handleSubmit}>
           <label>
             title:
             <input type="text" value={this.state.title} onChange={this.handleChange} />
           </label> <br/>
           <input type="submit" value="Submit" />
          </form>
           
  		);

  }
}


/////////////////////////////////////

import React from "react";
import reactDOM from "react-dom";
import { Form, Button } from "react-bootstrap"; 

export default class BlogForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: " ",
      content: " "
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    validateForm() {
        return this.state.title.length > 0 && this.state.content.length > 0;
      }

    handleChange(event) {
    this.setState({
          [event.target.id]: event.target.value
        });
  }



   handleSubmit = async event => {
    event.preventDefault();
    const userObj = {
      title: this.state.title,
      content: this.state.content
    }
    localStorage.setItem('objblog', JSON.stringify(userObj));
    alert('submitted');
   }

  render() {
    return(
          
          <div className="Formbox">
          <Form onSubmit={this.handleSubmit.bind(this)}>
             
              <Form.Group controlId="title" bsSize="large">
               <Form.Label>title</Form.Label>
                <Form.Control
                  as="textarea"
                  autoFocus
                  placeholder="Enter title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
                    
              </Form.Group>
              
              <Form.Group controlId="content" bsSize="large">
               <Form.Label>content</Form.Label>
                <Form.Control
                  as="textarea"
                  value={this.state.content}
                  onChange={this.handleChange}
                  placeholder="content"
                />
              </Form.Group> 
            
              <Button
                block
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
              >
                submit
              </Button>
              
            </Form>
        </div>
        
           
      );

  }
}


