// React
import { useState } from "react";

// Components
import Footer from "../../components/Footer.jsx";

// Libraries
import { motion, AnimatePresence } from "framer-motion";

// Styles
import "../../styles/common.css";

export default function PracticarBucleWhile() {
  const [feedbackVisible, setFeedbackVisible] = useState({});

  const niveles = [
    {
      id: 1,
      titulo: "Nivel 1: Caminar hasta tocar el borde",
      enunciado:
        "Haz que el personaje avance 10 pasos mientras no toque el borde del escenario.",
      retroalimentacion:
        "Aquí comprendiste que el bucle while permite repetir acciones hasta que se cumpla una condición. ¡Muy bien! Estás aprendiendo a controlar el movimiento con lógica condicional.",
      tipoActividad: "juego",
    },
    {
      id: 2,
      titulo: "Nivel 2: Girar hasta encontrar el puntero",
      enunciado:
        "Haz que el personaje gire 15 grados mientras no esté apuntando hacia el puntero del ratón.",
      retroalimentacion:
        "Aquí exploraste cómo el bucle while mantiene la acción hasta que se cumple una condición externa. ¡Excelente! Estás descubriendo cómo interactuar con el usuario.",
      tipoActividad: "juego",
    },
    {
      id: 3,
      titulo: "Nivel 3: Saludar hasta que se presione una tecla",
      enunciado:
        'Haz que el personaje diga "¡Hola!" mientras no se presione la tecla espacio.',
      retroalimentacion:
        "Aquí lograste que el personaje repita un mensaje hasta que el usuario intervenga. ¡Muy bien! Estás creando programas interactivos.",
      tipoActividad: "imagen",
    },
    {
      id: 4,
      titulo: "Nivel 4: Cambiar disfraz hasta llegar al borde",
      enunciado:
        "Haz que el personaje cambie de disfraz mientras no toque el borde del escenario.",
      retroalimentacion:
        "Aquí comprendiste que el bucle while puede dar continuidad visual hasta que se cumpla una condición. ¡Fantástico! Estás animando con lógica condicional.",
      tipoActividad: "imagen",
    },
    {
      id: 5,
      titulo: "Nivel 5: Moverse hasta alcanzar al puntero",
      enunciado:
        "Haz que el personaje avance 5 pasos mientras no toque el puntero del ratón.",
      retroalimentacion:
        "Aquí aplicaste el bucle while para crear una persecución. ¡Excelente! Estás programando con creatividad y control de condiciones.",
      tipoActividad: "imagen",
    },
    {
      id: 6,
      titulo: "Nivel 6: Caminar y saludar hasta tocar el borde",
      enunciado:
        'Haz que el personaje avance 10 pasos y diga "¡Voy!" mientras no toque el borde.',
      retroalimentacion:
        "Aquí combinaste movimiento y comunicación dentro de un bucle. ¡Muy bien! Estás creando secuencias más completas con condiciones.",
      tipoActividad: "imagen",
    },
    {
      id: 7,
      titulo: "Nivel 7: Girar y cambiar disfraz hasta apuntar al puntero",
      enunciado:
        "Haz que el personaje gire 10 grados y cambie de disfraz mientras no esté apuntando al puntero.",
      retroalimentacion:
        "Aquí lograste que el personaje combine rotación y apariencia hasta cumplir una condición. ¡Excelente! Estás aplicando lógica condicional en animaciones.",
      tipoActividad: "imagen",
    },
    {
      id: 8,
      titulo: "Nivel 8: Repetir saludo y sonido hasta presionar tecla",
      enunciado:
        'Haz que el personaje diga "¡Hola!" y toque un sonido mientras no se presione la tecla espacio.',
      retroalimentacion:
        "Aquí integraste comunicación y sonido en un bucle condicional. ¡Fantástico! Estás creando programas más expresivos e interactivos.",
      tipoActividad: "imagen",
    },
    {
      id: 9,
      titulo: "Nivel 9: Avanzar y retroceder hasta encontrar al puntero",
      enunciado:
        "Haz que el personaje avance 20 pasos y luego retroceda 20 pasos mientras no toque el puntero.",
      retroalimentacion:
        "Aquí simulaste un movimiento de ida y vuelta con condición. ¡Muy bien! Estás explorando cómo los bucles while generan patrones dinámicos.",
      tipoActividad: "imagen",
    },
    {
      id: 10,
      titulo: "Nivel 10: Animación con persecución",
      enunciado:
        'Haz que el personaje cambie de disfraz, avance 10 pasos y toque un sonido mientras no alcance al puntero del ratón. Cuando finalmente lo toque, debe decir "¡Te encontré!"',
      retroalimentacion:
        "Aquí diseñaste una animación interactiva que combina movimiento, apariencia y sonido dentro de un bucle while. Comprendiste que la condición controla cuándo detener la secuencia y ejecutar una acción final. ¡Excelente! Estás aplicando lógica avanzada y creatividad para construir programas dinámicos e inteligentes.",
      tipoActividad: "imagen",
    },
  ];

  const toggleFeedback = (nivelId) => {
    setFeedbackVisible((prev) => ({
      ...prev,
      [nivelId]: prev[nivelId] ? prev[nivelId] : true,
    }));
  };

  return (
    <div className="page-practicar-bucle-while page-container">
      <h2 className="page-practicar-bucle-while__title page-title">
        Llegó la hora de practicar
      </h2>

      <p className="page-practicar-bucle-while__enunciado page-description">
        Encontrarás 10 niveles de actividades diseñadas para ayudarte a aprender
        y comprender qué es y cómo funciona el bucle while en programación;
        atrévete a resolverlos y confirma lo que sabes.
      </p>

      <div className="page-practicar-bucle-while__niveles card-list">
        {niveles.map((nivel) => (
          <div
            key={nivel.id}
            className="page-practicar-bucle-while__nivel card"
          >
            <h3 className="page-practicar-bucle-while__nivel-titulo card__title">
              {nivel.titulo}
            </h3>

            <p className="page-practicar-bucle-while__nivel-enunciado card__text">
              {nivel.enunciado}
            </p>

            {nivel.tipoActividad === "juego" ? (
              <div className="page-practicar-bucle-while__juego-placeholder placeholder">
                Este es el juego {nivel.id}
              </div>
            ) : (
              <div className="page-practicar-bucle-while__imagen-placeholder placeholder">
                Acá va la imagen
              </div>
            )}

            <button
              onClick={() => toggleFeedback(nivel.id)}
              className="page-practicar-bucle-while__feedback-btn btn-standard"
              disabled={feedbackVisible[nivel.id]}
            >
              Ver resultados
            </button>

            <AnimatePresence>
              {feedbackVisible[nivel.id] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="page-practicar-bucle-while__feedback feedback"
                >
                  <p className="page-practicar-bucle-while__feedback-text feedback__text">
                    {nivel.retroalimentacion}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
