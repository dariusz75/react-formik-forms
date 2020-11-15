import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import "../FormWithUseFormikHook/simple-form-with-validation.css";

const initialValues = {
  name: "",
  email: "",
  chanel: ""
};

const onSubmit = (values) => {
  console.log("SimpleFormVithValidation submited values are:", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("The name is required"),
  email: Yup.string()
    .email("Wromg email format. Please correct.")
    .required("Email adres is required"),
  chanel: Yup.string().required("Required")
});

const FormWithYup = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: validationSchema
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

export default FormWithYup;
