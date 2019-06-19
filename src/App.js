import React from "react";
import reactDOM from "react-dom";
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Form, Button } from "react-bootstrap";
import { useAlert } from 'react-alert'
//import TransitionGroup from "react-transition-group";

//import FadeTransition from "fadeTransition";

const Home = () => (
      <div>
        Home
      </div>
    )

    const About = () => (
      <div>
        About
      </div>
    )

    

    const Contact = () => (
      <div>
        Contact
      </div>
    )

    const info = () => (
      <div>
        info
      </div>
    )

const MainMenu = () => {
    return (
     <div className="buttons">
      <Link to="/">
        <button type="button" className="menu-btn">home</button>
      </Link>
      <Link to="/about">
        <button type="button" className="menu-btn">About</button>
      </Link>
      
      <Link to="/contact">
        <button type="button" className="menu-btn">contact</button>
      </Link>
      <Link to="/info">
        <button type="button" className="menu-btn">info</button>
      </Link>
    </div>
  );
};

const Welcome = ({user, onSignOut})=> {
  // This is a dumb "stateless" component
  return (
    <div>
      Welcome <strong>{user.Username}</strong>!
      <a href="javascript:;" onClick={onSignOut}>Sign out</a>
    </div>
  )
}

class App extends React.Component {

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
  debugger;
  let val=0;
  for (let i = 0; i < this.state.items.length; i++) {
    if ((this.state.items[i].email == email) && (this.state.items[i].name == password)) {
      this.setState({
      user:{
      email,password
         }
      });
    val=1;
    } 
  }
    if(val==0){
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
       loginRegBox =  (<LoginBox onSignIn={this.signIn.bind(this)} />);
    } else if(this.state.isRegisterOpen) {
        loginRegBox = (<RegisterBox onRegister={this.Register.bind(this)}/>);
      }
    return (
      <div className="root-container">
       <Helmet bodyAttributes={{style: 'background-color:#dcc8c8;'}}/>
       <div className="display">

        
       <ul>
         {items.map(item => (
           <li key={item.id}>
              email: {item.email} | password: {item.name}  
             </li> 
          ))}
       </ul> 
       </div>  
       {(this.state.user) ? 
            <Welcome 
             user={this.state.user} 
             onSignOut={this.signOut.bind(this)} 
            />
          :
          <div>

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

     
     
       <Router>
       <div className="mainmenu">
        <MainMenu/>
       </div> 

      

      
        <div className="linking">
        
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/presence" component={info} />
            
          </div>
          </Router>
          </div>
        }
     </div>
       
    );

  }

}

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
reactDOM.render(
  <App/>, document.getElementById("root"));
export default App;