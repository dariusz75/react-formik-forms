import React from "react";
import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  FormWithUseFormikHook,
  FormWithYup,
  FormWithFormikComponents,
  ComplexForm
} from "./components";

export default function App() {
  return (
    <div className="App">
      <section>
        <div className="alert alert-secondary">
          <strong>Form without validation</strong>
        </div>
        <Form />
      </section>
      <hr />
      <section>
        <div className="alert alert-secondary">
          <strong>Form with useFormik hook validation</strong>
        </div>
        <FormWithUseFormikHook />
      </section>
      <hr />
      <section>
        <div className="alert alert-secondary">
          <strong>Form with useFormik and Yup validation</strong>
        </div>
        <FormWithYup />
      </section>
      <hr />
      <section>
        <div className="alert alert-secondary">
          <strong>Form with Formik components</strong>
          <div>
            <smal>And with reseting form data </smal>
          </div>
        </div>
        <FormWithFormikComponents />
      </section>
      <hr />
      <section>
        <div className="alert alert-secondary">
          <strong>More complex form with useFormik validation</strong>
        </div>
        <ComplexForm />
      </section>
    </div>
  );
}
