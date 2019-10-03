import React from "react";
import BlogForm from "./BlogForm.js";
import "./AddBlogs.css";
 
    function AddBlogs(){
      return(
        
          <div className="blogFm">
            <h2>Add a Blog</h2>
            <hr />
            <BlogForm/>
            
          </div>
            
        );
    }
    

export default AddBlogs;    