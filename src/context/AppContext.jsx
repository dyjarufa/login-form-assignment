import React, { createContext, useReducer, useContext } from "react";

const AppContext = createContext();

const initialState = {
  name: "",
  password: "",
  hasError: false,
  IsShowGreeting: false,
};

function appReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET_FIELDS":
      return initialState;
    case "SET_ERROR":
      return { ...state, showError: action.value };
    case "LOGIN_SUCCESS":
      return { ...state, showGreeting: true };
    default:
      return state;
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
