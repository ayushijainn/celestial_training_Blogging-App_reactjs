import React from "react";

 
    const AddBlogs = () => (
      <div>
        Add Blogs
      </div>
    )
    

export default AddBlogs;   

//////////////

import React from "react";
import BlogPostForm from "./components/BlogPostForm.js";

 
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