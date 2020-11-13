import React from "react";
import { useFormik } from "formik";

const SimpleForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      chanel: ""
    },
    onSubmit: (submitedValues) => {
      console.log("Submited values are:", submitedValues);
    }
  });

  console.log("Formik values are:", formik.values);

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
          value={formik.values.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="chanel">Chanel</label>
        <input
          className="form-control"
          type="text"
          id="chanel"
          name="chanel"
          onChange={formik.handleChange}
          value={formik.values.chanel}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SimpleForm;
