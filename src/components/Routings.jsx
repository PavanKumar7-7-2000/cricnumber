import React, { useState } from "react";
import "./Routing.css";
import { Link } from "react-router-dom";

export const Routings = () => {
  const [file, setFile] = useState(null);
  return (
    <div>
      welcome
      <Link className="login" to="/login">
        /
      </Link>
      <Link className="login" to="/two">
        two
      </Link>
      <label htmlFor="file" className="shareOption">
        ::::
        <input
          style={{ display: "none" }}
          type="file"
          id="file"
          accept=".png,.jpeg,.jpg"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </label>
    </div>
  );
};
export default Routings;
