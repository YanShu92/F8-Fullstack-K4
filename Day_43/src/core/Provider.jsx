import { reducer, initialState } from "./reducer";
import { createContext, useReducer } from "react";
export const ProviderContext = createContext();
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProviderContext.Provider value={{ state, dispatch }}>
      {children}
    </ProviderContext.Provider>
  );
};

export default Provider;
