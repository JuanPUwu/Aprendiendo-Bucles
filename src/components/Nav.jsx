// Estilos
import "../styles/nav.css";

// Contexto de React
import { useContext } from "react";
import { ViewContext } from "../context/ViewContext.jsx";

// Componentes
import ButtonNav from "./ButtonNav.jsx";
import ButtonSettings from "./ButtonSettings.jsx";

export default function Nav() {
  const { setCurrentView } = useContext(ViewContext);

  return (
    <nav>
      <h1>Aprendiendo sobre bucles en scratch</h1>
      <ButtonNav
        text={"Bienvenida"}
        onClick={() => setCurrentView("bienvenida")}
        withArrow={false}
      />
      <ButtonNav
        text={"Inicio"}
        onClick={() => setCurrentView("inicio")}
        withArrow={false}
      />
      <ButtonNav
        text={"Conceptualización"}
        onClick={() => setCurrentView("")}
        withArrow={true}
      />
      <ButtonNav
        text={"Bucle for"}
        onClick={() => setCurrentView("")}
        withArrow={true}
      />
      <ButtonNav
        text={"Bucle while"}
        onClick={() => setCurrentView("")}
        withArrow={true}
      />
      <ButtonNav
        text={"Actividad recreativa"}
        onClick={() => setCurrentView("")}
        withArrow={false}
      />
      <ButtonSettings />
    </nav>
  );
}
