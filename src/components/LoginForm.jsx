import React, { useRef } from "react";
import Modal from "./Modal";
import { useAppContext } from "../context/AppContext";



const LoginForm = () => {
  const {state, dispatch} = useAppContext();

  const inputRef = useRef(null);

  const handleFieldChange = (field) => (event) => {
    dispatch({ type: "UPDATE_FIELD", field, value: event.target.value });
  };

  const handleSubmit = () => {
    if (!state.name || !state.password) {
      dispatch({ type: "SET_ERROR", value: true });
    } else {
      dispatch({ type: "LOGIN_SUCCESS" });
    }
  };

  const handleReset = () => {
    dispatch({ type: "RESET_FIELDS" });
    inputRef.current?.focus();
  };
    
    
  if (state.showGreeting) {
    return <h1>Hello, {state.name}!</h1>;
  }

  return (
    <div className="login-form">
      <h2>Login</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={handleFieldChange("name")}
      />
      <input
        type="password"
        placeholder="Password"
        value={state.password}
        onChange={handleFieldChange("password")}
      />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
      {state.showError && (
        <Modal
          message="All fields are required."
          onClose={() => dispatch({ type: "SET_ERROR", value: false })}
        />
      )}
    </div>
  );
};

export default LoginForm;
