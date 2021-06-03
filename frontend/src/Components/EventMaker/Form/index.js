import React, { useEffect, useState } from "react";
import DateSelector from "../../DatePicker/DatePicker";


export const Form = ({ onSubmit }) => {

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name of Event</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="start">Starting time (YYYY-MM-DD HH:MM) </label>
        <input className="form-control" id="start" />
      </div>
      <div className="form-group">
        <label htmlFor="end">Ending Time (YYYY-MM-DD HH:MM) </label>
        <input className="form-control" id="end" />
      </div>
      <div className="form-group">
        <label htmlFor="color">Color in Hex (#RRGGBB)</label>
        <input className="form-control" id="color" />
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
