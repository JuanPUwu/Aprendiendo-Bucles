import { createContext, useState } from "react";

export const ViewContext = createContext();

export function ViewProvider({ children }) {
  const [currentView, setCurrentView] = useState("bienvenida");

  return (
    <ViewContext.Provider value={{ currentView, setCurrentView }}>
      {children}
    </ViewContext.Provider>
  );
}
