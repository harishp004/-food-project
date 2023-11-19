import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();

  const [disease, setDisease] = useState("");
  const [date, setDate] = useState(new Date());
  function handleSubmit(e) {
    e.preventDefault();
    if (disease == "Dengue") {
      navigate("/dengueDetails")
    } else if (disease == "Malaria") {
      navigate("/malariaDetails");
    }

    
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Patient Form</h3>
          <div className="mb-3">
            <label>Patient Name</label>
            <input
              type="name"
              className="form-control"
              placeholder="Enter name"
              
            />
          </div>
          <div className="mb-3">
            <label>Gender</label>
            <br />
            <input type="radio" name="UserType" value="User" />
            Male
            <input type="radio" name="UserType" value="Admin" />
            Female
          </div>
          <div className="mb-3">
            <label>Date Of Birth</label>
            <Form.Control
              type="date"
              name="datepic"
              placeholder="DateRange"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Disease</label>
            <input
              type="name"
              className="form-control"
              placeholder="Enter the name of your disease"
              onChange={(e) => setDisease(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>BP</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter your BP"
              
            />
          </div>
          <div className="mb-3">
            <label>Acidity</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter the Acidity level"
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
           
          </div>
        </form>
      </div>
    </div>
  );
}
