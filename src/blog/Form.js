import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div className="col-12 col-lg-6 offset-lg-3">
        <input className="form-control my-3" placeholder="Article Title" />
        <textarea className="form-control my-3" placeholder="Article Description">
        </textarea>
        <input className="form-control my-3" placeholder="Article Author" />
        <button className="btn btn-primary float-right">Submit</button>
      </div>
    )
  }
}

export default Form;