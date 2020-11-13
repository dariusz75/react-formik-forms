import React from "react";

const initialValues = {
  name: "",
  email: "",
  chanel: ""
};

const ComplexForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" />
        <small className="form-text text-muted">
          validate message example{" "}
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="aboutMe">About me</label>
        <textarea className="form-control" id="aboutMe" rows="3"></textarea>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="agree" />
        <label className="form-check-label" htmlFor="agree">
          I agree with terms and conditions
        </label>
      </div>
      <div className="form-group ">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="maleRadios"
            value="option1"
            checked
          />
          <label className="form-check-label" htmlFor="maleRadios">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="femaleRadio"
            value="option2"
          />
          <label className="form-check-label" htmlFor="femaleRadio">
            Female
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ComplexForm;
