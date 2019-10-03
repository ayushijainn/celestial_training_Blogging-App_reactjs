import React from "react";
import BlogView from "./BlogView.js";
import "../css/Welcome.css";
 
    function ViewBlogs(){
      return(
        
          <div className="blogv">
            <div className="heading">
            <h2>My Blogs</h2>
            </div>
            <hr />
            <BlogView/>
            
          </div>

            
        );
    }
    

    

export default ViewBlogs;     