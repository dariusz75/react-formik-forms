import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./FormWithFormikComponents.css";

const initialValues = {
  name: "",
  email: "",
  chanel: "",
  about: ""
};

const validationSchema = Yup.object({
  name: Yup.string().required("The name is required"),
  email: Yup.string()
    .email("Wromg email format. Please correct.")
    .required("Email adres is required"),
  chanel: Yup.string().required("Required"),
  about: Yup.string().required("Please provide chanel details")
});

const onSubmit = (values, onSubmitProps) => {
  console.log("SimpleFormVithValidation submited values are:", values);
  console.log("onSubmitProps are", onSubmitProps);
  onSubmitProps.resetForm();
};

const FormWithFormikComponents = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <Field className="form-control" type="text" id="name" name="name" />
          <div className="error-message">
            <ErrorMessage name="name" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field
            className="form-control"
            type="email"
            id="email"
            name="email"
          />
          <div className="error-message">
            <ErrorMessage name="email" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="chanel">Chanel</label>
          <Field
            className="form-control"
            type="text"
            id="chanel"
            name="chanel"
          />
          <div className="error-message">
            <ErrorMessage name="chanel" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="about">
            About <small>(created with as="textarea" props)</small>
          </label>
          <Field
            className="form-control"
            id="about"
            name="about"
            as="textarea"
          />
          <div className="error-message">
            <ErrorMessage name="chanel" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default FormWithFormikComponents;
