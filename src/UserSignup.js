import React, { useState } from "react";

import "./UserSignup.css";
import useSetState from "./useSetState";

const initialState = {
  userName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  investmentInterest: false
};

const UserSignup = () => {
  const [
    { email, userName, passwordConfirmation, password, investmentInterest },
    setState
  ] = useSetState(initialState);

  const handleSubmit = event => {
    event.preventDefault();
    clear();
  };

  const handleChange = e => {
    if (e.target.type === "checkbox") {
      setState({ [e.target.name]: e.target.checked });
    } else {
      setState({ [e.target.name]: e.target.value });
    }
  };

  const clear = () => {
    setState(initialState);
  };

  return (
    <form className="UserSignup" onSubmit={handleSubmit}>
      <label htmlFor="userName">User Name</label>
      <input
        id="userName"
        name="userName"
        type="text"
        value={userName}
        required
        onChange={handleChange}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        required
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        value={password}
        required
        onChange={handleChange}
      />
      <label htmlFor="passwordConfirmation">Confirm Password</label>
      <input
        id="passwordConfirmation"
        name="passwordConfirmation"
        type="password"
        value={passwordConfirmation}
        required
        onChange={handleChange}
      />
      <label htmlFor="investmentInterest" className="UserSignup--checkbox">
        <input
          id="investmentInterest"
          name="investmentInterest"
          type="checkbox"
          checked={investmentInterest}
          onChange={handleChange}
        />
        Do you want to maybe help us out with an angel investment?
      </label>
      <input type="Submit" />
    </form>
  );
};

export default UserSignup;
