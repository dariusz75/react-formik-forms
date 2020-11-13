import React from "react";
import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { ComplexForm, SimpleForm } from "./components";

export default function App() {
  return (
    <div className="App">
      <section>
        <div class="alert alert-secondary"></div>
        <SimpleForm />
      </section>
      <hr />
      <section>
        <div class="alert alert-secondary">
          <strong>Simple form with validation</strong>
        </div>
        <SimpleForm />
      </section>
      <hr />
      <section>
        <div class="alert alert-secondary">
          <strong>More complex form example</strong>
        </div>
        <ComplexForm />
      </section>
    </div>
  );
}
