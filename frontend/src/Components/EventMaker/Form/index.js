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
        <label htmlFor="start">Starting time (YYYY-DD-MM HH:MM) </label>
        <input className="form-control" id="start" />
        {/* <DateSelector id="StartTime"></DateSelector> */}
        {/* <DatePicker></DatePicker> */}
        {/* <input className="form-control" id="name" /> */}
      </div>
      <div className="form-group">
        <label htmlFor="end">Ending Time (YYYY-DD-MM HH:MM) </label>
        <input className="form-control" id="end" />
        {/* <DatePicker></DatePicker> */}
        {/* <DateSelector id="EndTime"></DateSelector> */}
      </div>
      <div className="form-group">
        <label htmlFor="vendor">Vendor Application</label>
        <input className="form-control" id="vendor" />
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
