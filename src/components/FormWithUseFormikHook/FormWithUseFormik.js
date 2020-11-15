import React from "react";
import { useFormik } from "formik";
import "./simple-form-with-validation.css";

const initialValues = {
  name: "",
  email: "",
  chanel: ""
};

const onSubmit = (values) => {
  console.log("SimpleFormVithValidation submited values are:", values);
};

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      values.email
    )
  ) {
    errors.email = "Invalid email format";
  }

  if (!values.chanel) {
    errors.chanel = "Required";
  }

  return errors;
};

const FormWithUseFormikHook = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validate: validate
  });

  //console.log("values are:", formik.values);
  //console.log("errors are:", formik.errors);
  //console.log("Visited fields", formik.touched);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <small className="form-text text-muted">{formik.errors.name}</small>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <small className="form-text text-muted">{formik.errors.email}</small>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="chanel">Chanel</label>
        <input
          className="form-control"
          type="text"
          id="chanel"
          name="chanel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.chanel}
        />
        {formik.touched.chanel && formik.errors.chanel ? (
          <small className="form-text text-muted">{formik.errors.chanel}</small>
        ) : null}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormWithUseFormikHook;
