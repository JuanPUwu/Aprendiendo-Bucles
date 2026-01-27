// Estilos
import "../styles/nav.css";

import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

// Componentes
import ButtonNav from "./ButtonNav.jsx";
import ButtonSettings from "./ButtonSettings.jsx";

// Imagenes
import flechaLink from "../assets/img/flecha-link.png";

const DROPDOWN_IDS = {
  CONCEPTUALIZACION: "conceptualizacion",
  BUCLE_FOR: "bucleFor",
  BUCLE_WHILE: "bucleWhile",
};

export default function Nav() {
  const location = useLocation();
  const navRef = useRef(null);
  const [pinnedDropdown, setPinnedDropdown] = useState(null);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const isDropdownOpen = (id) =>
    pinnedDropdown === id || (!pinnedDropdown && hoveredDropdown === id);

  const handleDropdownTriggerClick = (id) => {
    setPinnedDropdown((prev) => (prev === id ? null : id));
  };

  const handleDropdownMouseEnter = (id) => {
    setHoveredDropdown(id);
  };

  const handleDropdownMouseLeave = () => {
    setHoveredDropdown(null);
  };

  const closeDropdown = useCallback(() => {
    setPinnedDropdown(null);
    setHoveredDropdown(null);
  }, []);

  const handleDropdownLinkClick = (to) => (e) => {
    closeDropdown();
    if (location.pathname === to) e.preventDefault();
  };

  // Cerrar dropdown al hacer clic fuera del dropdown específico
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pinnedDropdown) {
        const clickedElement = event.target;

        // Verificar si el clic está dentro del contenido del dropdown abierto
        const dropdownContent = clickedElement.closest(
          ".dropdown-content.dropdown-open",
        );

        // Si el clic no está dentro del contenido del dropdown, cerrar
        // Esto incluye clics en otros botones del nav, título, o cualquier parte fuera del dropdown
        if (!dropdownContent) {
          closeDropdown();
        }
      }
    };

    if (pinnedDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pinnedDropdown, closeDropdown]);

  // Helper para crear Links del dropdown con accesibilidad condicional
  const createDropdownLink = (to, children, dropdownId) => {
    const isOpen = isDropdownOpen(dropdownId);
    return (
      <Link
        to={to}
        onClick={handleDropdownLinkClick(to)}
        tabIndex={isOpen ? undefined : -1}
        aria-hidden={!isOpen}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav ref={navRef}>
      <Link
        to="/bienvenida"
        className="nav-title-link"
        aria-label="Ir al inicio"
        title="Ir al inicio"
        onClick={closeDropdown}
      >
        <h1>Aprendiendo sobre bucles en scratch</h1>
      </Link>
      <ButtonNav
        text="Bienvenida"
        to="/bienvenida"
        withArrow={false}
        onClick={closeDropdown}
      />
      <ButtonNav
        text="Inicio"
        to="/inicio"
        withArrow={false}
        onClick={closeDropdown}
      />
      <ButtonNav
        text="Conceptualización"
        dropdownId={DROPDOWN_IDS.CONCEPTUALIZACION}
        withArrow={true}
        isOpen={isDropdownOpen(DROPDOWN_IDS.CONCEPTUALIZACION)}
        onTriggerClick={() =>
          handleDropdownTriggerClick(DROPDOWN_IDS.CONCEPTUALIZACION)
        }
        onMouseEnter={() =>
          handleDropdownMouseEnter(DROPDOWN_IDS.CONCEPTUALIZACION)
        }
        onMouseLeave={handleDropdownMouseLeave}
        dropdownContent={
          <>
            {createDropdownLink(
              "/conceptualizacion/queEsUnBucle",
              <>
                <div>
                  <p>¿Que es un bucle?</p>
                  <img src={flechaLink} alt="" />
                </div>
                <span>
                  Explicación básica de qué es un bucle y cómo se usa para
                  repetir acciones en programación y Scratch.
                </span>
              </>,
              DROPDOWN_IDS.CONCEPTUALIZACION,
            )}
            {createDropdownLink(
              "/conceptualizacion/horaDePracticar",
              <>
                <div>
                  <p>Llegó la hora de practicar</p>
                  <img src={flechaLink} alt="" />
                </div>
                <span>
                  Sección de actividades y ejercicios donde aplicar lo aprendido
                  sobre bucles mediante ejemplos prácticos e interactivos.
                </span>
              </>,
              DROPDOWN_IDS.CONCEPTUALIZACION,
            )}
            {createDropdownLink(
              "/conceptualizacion/compruebaAprendizaje",
              <>
                <div>
                  <p>Comprueba tu aprendizaje</p>
                  <img src={flechaLink} alt="" />
                </div>
                <span>
                  Espacio para evaluar lo aprendido sobre los bucles mediante
                  preguntas y actividades de repaso.
                </span>
              </>,
              DROPDOWN_IDS.CONCEPTUALIZACION,
            )}
          </>
        }
      />
      <ButtonNav
        text="Bucle for"
        dropdownId={DROPDOWN_IDS.BUCLE_FOR}
        withArrow={true}
        isOpen={isDropdownOpen(DROPDOWN_IDS.BUCLE_FOR)}
        onTriggerClick={() =>
          handleDropdownTriggerClick(DROPDOWN_IDS.BUCLE_FOR)
        }
        onMouseEnter={() => handleDropdownMouseEnter(DROPDOWN_IDS.BUCLE_FOR)}
        onMouseLeave={handleDropdownMouseLeave}
        dropdownContent={
          <>
            {createDropdownLink(
              "/bucleFor/queEsUnBucleFor",
              <>
                <div>
                  <p>¿Que es un bucle For?</p>
                  <img src={flechaLink} alt="" />
                </div>
                <span>
                  Explicación sencilla del bucle for y cómo se utiliza para
                  repetir acciones un número determinado de veces en
                  programación y Scratch.
                </span>
              </>,
              DROPDOWN_IDS.BUCLE_FOR,
            )}
            {createDropdownLink(
              "/bucleFor/horaDePracticar",
              <>
                <div>
                  <p>Llegó la hora de practicar</p>
                  <img src={flechaLink} alt="" />
                </div>
                <span>
                  Sección de actividades y ejercicios donde aplicar lo aprendido
                  sobre bucles mediante ejemplos prácticos e interactivos.
                </span>
              </>,
              DROPDOWN_IDS.BUCLE_FOR,
            )}
            {createDropdownLink(
              "/bucleFor/compruebaAprendizaje",
              <>
                <div>
                  <p>Comprueba tu aprendizaje</p>
                  <img src={flechaLink} alt="" />
                </div>
                <span>
                  Espacio para evaluar lo aprendido sobre los bucles mediante
                  preguntas y actividades de repaso.
                </span>
              </>,
              DROPDOWN_IDS.BUCLE_FOR,
            )}
          </>
        }
      />
      <ButtonNav
        text="Bucle while"
        dropdownId={DROPDOWN_IDS.BUCLE_WHILE}
        withArrow={true}
        isOpen={isDropdownOpen(DROPDOWN_IDS.BUCLE_WHILE)}
        onTriggerClick={() =>
          handleDropdownTriggerClick(DROPDOWN_IDS.BUCLE_WHILE)
        }
        onMouseEnter={() => handleDropdownMouseEnter(DROPDOWN_IDS.BUCLE_WHILE)}
        onMouseLeave={handleDropdownMouseLeave}
        dropdownContent={
          <>
            {createDropdownLink(
              "/bucleWhile/queEsUnBucleWhile",
              <>
                <div>
                  <p>¿Que es un bucle While?</p>
                  <img src={flechaLink} alt="" />
                </div>
                <span>
                  Explicación básica de qué es un bucle while y cómo se usa para
                  repetir acciones mientras se cumple una condición en
                  programación y en Scratch.
                </span>
              </>,
              DROPDOWN_IDS.BUCLE_WHILE,
            )}
            {createDropdownLink(
              "/bucleWhile/horaDePracticar",
              <>
                <div>
                  <p>Llegó la hora de practicar</p>
                  <img src={flechaLink} alt="" />
                </div>
                <span>
                  Sección de actividades y ejercicios donde aplicar lo aprendido
                  sobre bucles while mediante ejemplos prácticos e interactivos.
                </span>
              </>,
              DROPDOWN_IDS.BUCLE_WHILE,
            )}
            {createDropdownLink(
              "/bucleWhile/compruebaAprendizaje",
              <>
                <div>
                  <p>Comprueba tu aprendizaje</p>
                  <img src={flechaLink} alt="" />
                </div>
                <span>
                  Espacio para evaluar lo aprendido sobre los bucles while
                  mediante preguntas y actividades de repaso.
                </span>
              </>,
              DROPDOWN_IDS.BUCLE_WHILE,
            )}
          </>
        }
      />
      <ButtonNav
        text="Actividad recreativa"
        to="/actividadRecreativa"
        withArrow={false}
        onClick={closeDropdown}
      />
      <ButtonSettings />
    </nav>
  );
}
