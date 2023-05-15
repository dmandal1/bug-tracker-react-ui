import { useState } from "react";
import React from "react";
import "./Form.css";
function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email || password) {
          console.log("Email:", email);
          console.log("Password:", password);
        } else {
          console.error("email or passowrd is empty");
        }
        setEmail("");
        setPassword("");
      }}
      style={{
        padding: "16px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label>
        Email:
        <input
          type="email"
          className="custom-input"
          value={email}
          onChange={handleEmailChange}
        />
      </label>{" "}
      <label>
        Password:
        <input
          type="password"
          value={password}
          label="Password"
          className="custom-input"
          onChange={handlePasswordChange}
        />
      </label>
      <br /> <br />
      <button type="submit" className="SubmitButton">
        Submit
      </button>
    </form>
  );
}

export default Form;
