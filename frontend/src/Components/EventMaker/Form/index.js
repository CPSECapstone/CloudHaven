import React from "react";

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name of Event</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="name">Starting time</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="name">Ending Time</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
