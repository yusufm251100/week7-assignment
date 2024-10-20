import React from "react";
import { Link } from "react-router-dom";

const Navigate = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/form">Refactored Form</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigate;
