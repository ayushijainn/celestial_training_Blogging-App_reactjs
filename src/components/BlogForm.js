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

    clearr() {
      localStorage.clear();
    }  

    handleChange(event) {
    this.setState({
          [event.target.id]: event.target.value
        });
  }
   
  handleSubmit = async event => {
    event.preventDefault();
    let emptyarr= [];
    
    let oldvalues= JSON.parse(localStorage.getItem('objblog'));
    const userObj = {
      title: this.state.title,
      content: this.state.content
    }
    if(oldvalues){
       oldvalues.push(userObj);
       localStorage.setItem('objblog', JSON.stringify(oldvalues));
    }
     else {
      emptyarr.push(userObj);
      localStorage.setItem('objblog', JSON.stringify(emptyarr));
     }
       this.setState({title: " " , content: " "});
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
              <Button
                block
                bsSize="large"
                onClick={this.clearr.bind(this)}
                >
                Delete all blogs
              </Button>
              
            </Form>
        </div>
        
           
  		);

  }
}

