import React from "react";
import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  SimpleForm,
  SimpleFormWithValidation,
  ComplexForm
} from "./components";

export default function App() {
  return (
    <div className="App">
      <section>
        <div className="alert alert-secondary">
          <strong>Simple form without validation</strong>
        </div>
        <SimpleForm />
      </section>
      <hr />
      <section>
        <div className="alert alert-secondary">
          <strong>Simple form with validation</strong>
        </div>
        <SimpleFormWithValidation />
      </section>
      <hr />
      <section>
        <div className="alert alert-secondary">
          <strong>More complex form example</strong>
        </div>
        <ComplexForm />
      </section>
    </div>
  );
}
