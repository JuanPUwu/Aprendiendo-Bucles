// Estilos
import "../styles/nav.css";

// Contexto de React
import { useContext } from "react";
import { ViewContext } from "../context/ViewContext.jsx";

// Componentes
import ButtonNav from "./ButtonNav.jsx";
import ButtonSettings from "./ButtonSettings.jsx";

// Imagenes
import flechaLink from "../assets/img/flecha-link.png"

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
        dropdownContent={
          <>
            <button onClick={() => setCurrentView("what's-bucle")}>
              <div>
                <p>¿Que es un bucle?</p>
                <img src={flechaLink} alt="" />
              </div>
              <span>Explicación básica de qué es un bucle y cómo se usa para repetir acciones en programación y Scratch.</span>
            </button>
            <button onClick={() => setCurrentView("practicar-conceptualizacion")}>
              <div>
                <p>Llegó la hora de practicar</p>
                <img src={flechaLink} alt="" />
              </div>
              <span>Sección de actividades y ejercicios donde aplicar lo aprendido sobre bucles mediante ejemplos prácticos e interactivos.</span>
            </button>
            <button onClick={() => setCurrentView("comprueba-conceptualizacion")}>
              <div>
                <p>Comprueba tu aprendizaje</p>
                <img src={flechaLink} alt="" />
              </div>
              <span>Espacio para evaluar lo aprendido sobre los bucles mediante preguntas y actividades de repaso.</span>
            </button>
          </>
        }
      />
      <ButtonNav
        text={"Bucle for"}
        onClick={() => setCurrentView("")}
        withArrow={true}
        dropdownContent={
          <>
            <button onClick={() => setCurrentView("what's-bucle")}>
              <div>
                <p>¿Que es un bucle For?</p>
                <img src={flechaLink} alt="" />
              </div>
              <span>Explicación sencilla del bucle for y cómo se utiliza para repetir acciones un número determinado de veces en programación y Scratch.</span>
            </button>
            <button onClick={() => setCurrentView("practicar-conceptualizacion")}>
              <div>
                <p>Llegó la hora de practicar</p>
                <img src={flechaLink} alt="" />
              </div>
              <span>Sección de actividades y ejercicios donde aplicar lo aprendido sobre bucles mediante ejemplos prácticos e interactivos.</span>
            </button>
            <button onClick={() => setCurrentView("comprueba-conceptualizacion")}>
              <div>
                <p>Comprueba tu aprendizaje</p>
                <img src={flechaLink} alt="" />
              </div>
              <span>Espacio para evaluar lo aprendido sobre los bucles mediante preguntas y actividades de repaso.</span>
            </button>
          </>
        }
      />
      <ButtonNav
        text={"Bucle while"}
        onClick={() => setCurrentView("")}
        withArrow={true}
        dropdownContent={
          <>
            <button onClick={() => setCurrentView("what's-bucle-while")}>
              <div>
                <p>¿Que es un bucle While?</p>
                <img src={flechaLink} alt="" />
              </div>
              <span>Explicación básica de qué es un bucle while y cómo se usa para repetir acciones mientras se cumple una condición en programación y en Scratch.</span>
            </button>
            <button onClick={() => setCurrentView("practicar-bucle-while")}>
              <div>
                <p>Llegó la hora de practicar</p>
                <img src={flechaLink} alt="" />
              </div>
              <span>Sección de actividades y ejercicios donde aplicar lo aprendido sobre bucles while mediante ejemplos prácticos e interactivos.</span>
            </button>
            <button onClick={() => setCurrentView("comprueba-bucle-while")}>
              <div>
                <p>Comprueba tu aprendizaje</p>
                <img src={flechaLink} alt="" />
              </div>
              <span>Espacio para evaluar lo aprendido sobre los bucles while mediante preguntas y actividades de repaso.</span>
            </button>
          </>
        }
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
