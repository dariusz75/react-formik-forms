import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../FormWithUseFormikHook/simple-form-with-validation.css";

const initialValues = {
  name: "",
  email: "",
  chanel: ""
};

const validationSchema = Yup.object({
  name: Yup.string().required("The name is required"),
  email: Yup.string()
    .email("Wromg email format. Please correct.")
    .required("Email adres is required"),
  chanel: Yup.string().required("Required")
});

const onSubmit = (values) => {
  console.log("SimpleFormVithValidation submited values are:", values);
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
          <ErrorMessage name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field
            className="form-control"
            type="email"
            id="email"
            name="email"
          />
          <ErrorMessage name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="chanel">Chanel</label>
          <Field
            className="form-control"
            type="text"
            id="chanel"
            name="chanel"
          />
          <ErrorMessage name="chanel" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default FormWithFormikComponents;
