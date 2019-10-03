import React from "react";
import { Form, Button } from "react-bootstrap";
import reactDOM from "react-dom";

function optitle(props) {
    return <h3>{props.title}</h3>;
   }


class BlogView extends React.Component{
   
   constructor(props){
   	  super(props);
   	  let values= JSON.parse(localStorage.getItem('objblog'));
   	  debugger;
   	  this.state = {
   	  	titles: values
   	  };
   }
   
  
   rendertitle(){
    return (
        
       <optitle title={this.state.titles.title} />
        );
    }
   
   render() {
   	  return (

   	     <div className="vw">
   	       {this.rendertitle()}
   	     </div>  
        
   	  );
   }

}

export default BlogView;


//////////////////////

import React from "react";
import { Form, Button } from "react-bootstrap";
import reactDOM from "react-dom";

function optitle(props) {
    return <h3>{props.title}</h3>;
   }


class BlogView extends React.Component{
   
   constructor(props){
      super(props);
      let values= JSON.parse(localStorage.getItem('objblog'));
      
      this.state = {
        titles: values
      };
   }
   
  
   rendertitle(){
    return (
    <div className="display">
       
       <h4> {this.state.titles.title} </h4>
       
       <h6> {this.state.titles.content} </h6>
   
    </div>   
        );
    }
   
   render() {
      return (

         <div className="vw">
           {this.rendertitle()}
         </div>  
        
      );
   }

}

export default BlogView;


//////////////////////////////////////////////

import React from "react";
import { Form, Button } from "react-bootstrap";
import reactDOM from "react-dom";

function optitle(props) {
    return <h3>{props.title}</h3>;
   }


class BlogView extends React.Component{
   
   constructor(props){

      super(props);
      let values = [];
      
      if(JSON.parse(localStorage.getItem('objblog'))) {
      values= JSON.parse(localStorage.getItem('objblog'));
    }
      
      this.state = {
        titles: values
      };
   }
   
  
   rendertitle(){
    
    let blogTitles = null;
    if (this.state.titles.length > 0) {
      blogTitles = [];
      for(let i = 0; i < this.state.titles.length; i++) {
             
          blogTitles.push(<h4> {this.state.titles[i].title} </h4>);
       
             blogTitles.push(<h6> {this.state.titles[i].content} </h6>);

         
        }
    }

    
    return blogTitles;
    }
   
   render() {
      return (

         <div className="vw">
         <div className="display">
           {this.rendertitle()}
           </div>
         </div>  
        
      );
   }

}

export default BlogView;