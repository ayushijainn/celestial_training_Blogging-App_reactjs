import React from "react";
import BlogPostForm from "./BlogPostForm.js";
import FormThemeProvider from "./FormThemeProvider.js";
import "./AddBlogs.css";
 
    function AddBlogs(){
      return(
        <FormThemeProvider>
          <div className="blogForm">
            <h2>Blog post</h2>
            <BlogPostForm/>
            <hr />
          </div>
        </FormThemeProvider>    
        );
    }
    

export default AddBlogs;    