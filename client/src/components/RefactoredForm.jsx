import React, { useState } from "react";

const RefactoredForm = () => {
  // State variables for the refactored form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Event handlers
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Here you can handle the form submission, like sending the data to a server
    console.log("Email:", email);
    console.log("Password:", password);
  }

  return (
    <div>
      <h2>Refactored Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RefactoredForm;
