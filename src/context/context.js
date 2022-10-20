import { createContext, useContext, useState } from "react";

export const SelectedContext = createContext();

export const useSelected = () => {
  return useContext(SelectedContext);
};

export const SelectedProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);
  const [selectedOnMenu, setSelectedOnMenu] = useState("");
  const HandlerSelected = (placeInfo) => setSelected(placeInfo);
  const HandlerSelectedOnMenu = (menuInfo) => setSelectedOnMenu(menuInfo);

  return (
    <SelectedContext.Provider
      value={{
        selected,
        HandlerSelected,
        selectedOnMenu,
        HandlerSelectedOnMenu,
      }}
    >
      {children}
    </SelectedContext.Provider>
  );
};

export default SelectedProvider;
