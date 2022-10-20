import { createContext, useContext, useState } from "react";

export const SelectedContext = createContext();

export const useSelected = () => {
  return useContext(SelectedContext);
};

export const SelectedProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);
  const HandlerSelected = (placeInfo) => setSelected(placeInfo);

  return (
    <SelectedContext.Provider value={{ selected, HandlerSelected }}>
      {children}
    </SelectedContext.Provider>
  );
};

export default SelectedProvider;
