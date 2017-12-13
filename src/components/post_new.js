import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostNew extends Component {
  errorDisplay({ meta: { touched, error} } = field) {
    return `form-group ${touched && error ? "has-danger" : ""}`
  }

  renderField(field) {
    const { meta: { touched, error} } = field;

    return (
      <div className={`form-group ${touched && error ? "has-danger" : ""}`}>
        <label>{field.label}</label>
        <input
          type="text"
          className="form-control"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  renderTextArea(field) {
    const { meta: { touched, error} } = field;

    return (
      <div className={`form-group ${touched && error ? "has-danger" : ""}`}>
        <label>{field.label}</label>
        <textarea
          type="text"
          className="form-control"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
         <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
           <Field
             name="title"
             label="Title"
             component={this.renderField}
           />
           <Field
             name="categories"
             label="Categories"
             component={this.renderField}
           />
           <Field
             name="content"
             label="Content"
             component={this.renderTextArea}
           />
           <button type="submit" className="btn btn-primary">Submit</button>
           <Link to="/" className="btn btn-danger">Cancel</Link>
         </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title!";
  } else if (values.title.length <= 5) {
    errors.title = "Must be longer than 5 characters!";
  }

  if (!values.categories) {
    errors.categories = "Enter some categories!";
  }

  if (!values.content) {
    errors.content = "Enter some content please!";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(
  connect(null, { createPost })(PostNew)
);
