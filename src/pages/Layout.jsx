import { useContext } from "react";
import { ViewContext } from "../context/ViewContext.jsx";

import Bienvenida from "../pages/Bienvenida.jsx";
import Inicio from "../pages/Inicio.jsx";

function Layout() {
  const { currentView } = useContext(ViewContext);

  if (currentView === "bienvenida") return <Bienvenida />;
  if (currentView === "inicio") return <Inicio />;

  return <Bienvenida />;
}

export default Layout;
