import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  about: "",
  gender: "",
  agree: ""
};

const onSubmit = (values) => {
  console.log("submited values are:", values);
};

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.about) {
    errors.about = "Required";
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

  if (!values.about) {
    errors.about = "Required";
  }

  if (!values.gender) {
    errors.gender = "Required";
  }

  if (!values.agree) {
    errors.agree = "Please accept terms and conditions";
  }

  return errors;
};

const ComplexForm = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validate: validate
  });

  //console.log(" values are:", formik.values);
  console.log("errors are:", formik.errors);
  //console.log("Visited fields", formik.touched);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
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
          type="email"
          className="form-control"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <small className="form-text text-muted">{formik.errors.name}</small>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="about">About me</label>
        <textarea
          className="form-control"
          id="about"
          name="about"
          rows="3"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.about}
        ></textarea>
        {formik.touched.about && formik.errors.about ? (
          <small className="form-text text-muted">{formik.errors.name}</small>
        ) : null}
      </div>

      <div className="form-group ">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="male"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value="male"
            checked={formik.values.gender === "male"}
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="female"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value="female"
            checked={formik.values.gender === "female"}
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
        {formik.touched.gender && formik.errors.gender ? (
          <small className="form-text text-muted">{formik.errors.gender}</small>
        ) : null}
      </div>

      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="agree"
          name="agree"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.agree}
        />
        <label className="form-check-label" htmlFor="agree">
          I agree with terms and conditions
        </label>
        {formik.touched.agree && formik.errors.agree ? (
          <small className="form-text text-muted">{formik.errors.agree}</small>
        ) : null}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ComplexForm;
