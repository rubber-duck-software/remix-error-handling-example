import { Link } from "@remix-run/react";
import React from "react";

export default function Success() {
  return (
    <div>
      <h1>Success</h1>
      <div style={{ marginBottom: "1rem" }}>
        <Link to="/">Go to Original Form</Link>
      </div>
      <div>
        <Link to="/workaround">Go to Workaround</Link>
      </div>
    </div>
  );
}
