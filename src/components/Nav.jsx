// Estilos
import "../styles/nav.css";

// React y librerías
import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Componentes
import ButtonNav from "./ButtonNav.jsx";

// Imagenes
import flechaLink from "../assets/img/flecha-link.png";
import settingsImg from "../assets/img/settings.png";
import arowImg from "../assets/img/flecha.png";

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

        // Verificar si el clic está dentro del contenido del dropdown desktop
        const dropdownContent = clickedElement.closest(
          ".dropdown-content.dropdown-open",
        );

        // Verificar si el clic está en un botón del acordeón móvil
        const mobileAccordionTrigger = clickedElement.closest(
          ".menu-accordion-trigger",
        );

        // Si el clic no está en dropdown desktop ni en triggers móviles, cerrar
        if (!dropdownContent && !mobileAccordionTrigger) {
          closeDropdown();
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
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

  // Estado para el menú hamburguesa
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Manejo de la animación de rotación del botón de configuración
  const [rotacion, setRotacion] = useState(0);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      if (!next) closeDropdown();
      return next;
    });
  };

  const handleMobileLinkClick = (to) => (e) => {
    closeDropdown();
    setIsMenuOpen(false);
    if (location.pathname === to) e.preventDefault();
  };

  return (
    <nav ref={navRef}>
      <div className="header-nav">
        <Link
          to="/bienvenida"
          className="nav-title-link"
          aria-label="Ir al inicio"
          title="Ir al inicio"
          onClick={closeDropdown}
        >
          <h1>Aprendiendo sobre bucles en scratch</h1>
        </Link>
        <div className="cont-links">
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
                      Sección de actividades y ejercicios donde aplicar lo
                      aprendido sobre bucles mediante ejemplos prácticos e
                      interactivos.
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
                      Espacio para evaluar lo aprendido sobre los bucles
                      mediante preguntas y actividades de repaso.
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
            onMouseEnter={() =>
              handleDropdownMouseEnter(DROPDOWN_IDS.BUCLE_FOR)
            }
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
                      Sección de actividades y ejercicios donde aplicar lo
                      aprendido sobre bucles mediante ejemplos prácticos e
                      interactivos.
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
                      Espacio para evaluar lo aprendido sobre los bucles
                      mediante preguntas y actividades de repaso.
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
            onMouseEnter={() =>
              handleDropdownMouseEnter(DROPDOWN_IDS.BUCLE_WHILE)
            }
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
                      Explicación básica de qué es un bucle while y cómo se usa
                      para repetir acciones mientras se cumple una condición en
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
                      Sección de actividades y ejercicios donde aplicar lo
                      aprendido sobre bucles while mediante ejemplos prácticos e
                      interactivos.
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
        </div>
        <button
          onClick={handleMenuToggle}
          className={`menu-hamburger-btn ${isMenuOpen ? "menu-open" : ""}`}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <motion.button
          onClick={() => setRotacion((prev) => prev - 120)}
          animate={{ rotate: rotacion }}
          transition={{ type: "spring", stiffness: 100 }}
          className="settings-btn"
        >
          <img src={settingsImg} alt="Settings" />
        </motion.button>
      </div>
      {/* Menu hamburguesa */}
      <motion.div
        className="cont-menu-hamburguer"
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        aria-hidden={!isMenuOpen}
      >
        <div className="menu-hamburger-inner">
          <Link
            to="/bienvenida"
            className="menu-link"
            onClick={handleMobileLinkClick("/bienvenida")}
          >
            Bienvenida
          </Link>
          <Link
            to="/inicio"
            className="menu-link"
            onClick={handleMobileLinkClick("/inicio")}
          >
            Inicio
          </Link>

          <div className="menu-accordion">
            <button
              type="button"
              className="menu-accordion-trigger"
              aria-expanded={isDropdownOpen(DROPDOWN_IDS.CONCEPTUALIZACION)}
              onClick={() =>
                handleDropdownTriggerClick(DROPDOWN_IDS.CONCEPTUALIZACION)
              }
            >
              Conceptualización
              <motion.img
                src={arowImg}
                alt=""
                animate={{
                  rotateX: isDropdownOpen(DROPDOWN_IDS.CONCEPTUALIZACION)
                    ? 180
                    : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </button>
            <AnimatePresence mode="wait">
              {isDropdownOpen(DROPDOWN_IDS.CONCEPTUALIZACION) && (
                <motion.div
                  key="conceptualizacion-accordion"
                  className="menu-accordion-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Link
                    to="/conceptualizacion/queEsUnBucle"
                    onClick={handleMobileLinkClick(
                      "/conceptualizacion/queEsUnBucle",
                    )}
                  >
                    ¿Que es un bucle?
                  </Link>
                  <Link
                    to="/conceptualizacion/horaDePracticar"
                    onClick={handleMobileLinkClick(
                      "/conceptualizacion/horaDePracticar",
                    )}
                  >
                    Llegó la hora de practicar
                  </Link>
                  <Link
                    to="/conceptualizacion/compruebaAprendizaje"
                    onClick={handleMobileLinkClick(
                      "/conceptualizacion/compruebaAprendizaje",
                    )}
                  >
                    Comprueba tu aprendizaje
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="menu-accordion">
            <button
              type="button"
              className="menu-accordion-trigger"
              aria-expanded={isDropdownOpen(DROPDOWN_IDS.BUCLE_FOR)}
              onClick={() => handleDropdownTriggerClick(DROPDOWN_IDS.BUCLE_FOR)}
            >
              Bucle for
              <motion.img
                src={arowImg}
                alt=""
                animate={{
                  rotateX: isDropdownOpen(DROPDOWN_IDS.BUCLE_FOR) ? 180 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </button>
            <AnimatePresence mode="wait">
              {isDropdownOpen(DROPDOWN_IDS.BUCLE_FOR) && (
                <motion.div
                  key="bucle-for-accordion"
                  className="menu-accordion-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Link
                    to="/bucleFor/queEsUnBucleFor"
                    onClick={handleMobileLinkClick("/bucleFor/queEsUnBucleFor")}
                  >
                    ¿Que es un bucle For?
                  </Link>
                  <Link
                    to="/bucleFor/horaDePracticar"
                    onClick={handleMobileLinkClick("/bucleFor/horaDePracticar")}
                  >
                    Llegó la hora de practicar
                  </Link>
                  <Link
                    to="/bucleFor/compruebaAprendizaje"
                    onClick={handleMobileLinkClick(
                      "/bucleFor/compruebaAprendizaje",
                    )}
                  >
                    Comprueba tu aprendizaje
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="menu-accordion">
            <button
              type="button"
              className="menu-accordion-trigger"
              aria-expanded={isDropdownOpen(DROPDOWN_IDS.BUCLE_WHILE)}
              onClick={() =>
                handleDropdownTriggerClick(DROPDOWN_IDS.BUCLE_WHILE)
              }
            >
              Bucle while
              <motion.img
                src={arowImg}
                alt=""
                animate={{
                  rotateX: isDropdownOpen(DROPDOWN_IDS.BUCLE_WHILE) ? 180 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </button>
            <AnimatePresence mode="wait">
              {isDropdownOpen(DROPDOWN_IDS.BUCLE_WHILE) && (
                <motion.div
                  key="bucle-while-accordion"
                  className="menu-accordion-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Link
                    to="/bucleWhile/queEsUnBucleWhile"
                    onClick={handleMobileLinkClick(
                      "/bucleWhile/queEsUnBucleWhile",
                    )}
                  >
                    ¿Que es un bucle While?
                  </Link>
                  <Link
                    to="/bucleWhile/horaDePracticar"
                    onClick={handleMobileLinkClick(
                      "/bucleWhile/horaDePracticar",
                    )}
                  >
                    Llegó la hora de practicar
                  </Link>
                  <Link
                    to="/bucleWhile/compruebaAprendizaje"
                    onClick={handleMobileLinkClick(
                      "/bucleWhile/compruebaAprendizaje",
                    )}
                  >
                    Comprueba tu aprendizaje
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/actividadRecreativa"
            className="menu-link"
            onClick={handleMobileLinkClick("/actividadRecreativa")}
          >
            Actividad recreativa
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
