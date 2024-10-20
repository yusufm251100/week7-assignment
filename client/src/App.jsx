import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Things from "./components/Things";
import Navigate from "./components/Navigate";
import RefactoredForm from "./components/RefactoredForm";

export default function App() {
  console.log("App component rendered"); 


  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [job, setJob] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleJobChange(event) {
    setJob(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Navigate />
      <h1>Forms in React</h1>
      <h2>Wet Form (Write Everything Twice)</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Write your full name"
          required
          value={username}
          onChange={handleUsernameChange}
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Write your current location"
          required
          value={location}
          onChange={handleLocationChange}
        />

        <label htmlFor="job">Job</label>
        <input
          type="text"
          id="job"
          name="job"
          placeholder="Write your current job, student, or unemployed"
          required
          value={job}
          onChange={handleJobChange}
        />

        <button type="submit">
          Submit your data! All aboard the data train
        </button>
      </form>

      <p>Current username: {username}</p>
      <p>Current location: {location}</p>
      <p>Current job: {job}</p>

      <Routes>
        <Route path="/about" element={<Things />} />
        <Route path="/form" element={<RefactoredForm />} />
        <Route
          path="/"
          element={<h2>Welcome! Click on a link to navigate.</h2>}
        />
      </Routes>
    </>
  );
}
