import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import DengueDetails from "./components/dengueDetails";
import MalariaDetails from "./components/malariaDetails";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <SignUp /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dengueDetails" element={<DengueDetails />} />
          <Route path="/malariaDetails" element={<MalariaDetails />} />

        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;
