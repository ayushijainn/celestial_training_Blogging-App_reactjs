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