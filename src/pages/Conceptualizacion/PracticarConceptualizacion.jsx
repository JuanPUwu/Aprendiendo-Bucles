// React
import { useState } from "react";

// Components
import Footer from "../../components/Footer.jsx";

// Libraries
import { motion, AnimatePresence } from "framer-motion";

// Styles
import "../../styles/PracticarConceptualizacion.css";

export default function PracticarConceptualizacion() {
  const [feedbackVisible, setFeedbackVisible] = useState({
    nivel1: false,
    nivel2: false,
    nivel3: false,
    nivel4: false,
  });

  const toggleFeedback = (nivel) => {
    setFeedbackVisible((prev) => ({
      ...prev,
      [nivel]: !prev[nivel],
    }));
  };

  const niveles = [
    {
      id: "nivel1",
      titulo: "Nivel 1: Unamos la frase con el bucle",
      enunciado: "Une las frases con el bucle correspondiente.",
      retroalimentacion:
        "En esta actividad relacionaste cada frase con el tipo de bucle adecuado, ubicándolas en el lugar correcto según su significado. Esto te permitió reconocer conceptos clave de programación como repetición, condición y código. ¡Excelente trabajo! Lograste identificar y clasificar los bucles como todo un programador en entrenamiento. ¡Sigue practicando!",
      tipoActividad: "juego",
    },
    {
      id: "nivel2",
      titulo: "Nivel 2: Descifra la palabra clave del bucle",
      enunciado:
        "En esta actividad ordenarás palabras relacionadas con los bucles, ubicándolas correctamente para reforzar tu comprensión sobre cómo funcionan en programación",
      retroalimentacion:
        "Aquí organizaste palabras clave sobre bucles, comprendiendo cómo se repiten las acciones en programación. Visualizaste cómo los bucles permiten que los personajes o elementos actúen una y otra vez. ¡Excelente trabajo! Tus elecciones muestran que entiendes cómo los bucles estructuran el código y dan ritmo a las animaciones. ¡Estás programando con lógica y creatividad!",
      tipoActividad: "juego",
    },
    {
      id: "nivel3",
      titulo: "Nivel 3: Practica construyendo pseudocódigos",
      enunciado:
        "Elabora en tu cuaderno 3 códigos por bloques con bucles, así como se observa en el ejemplo.",
      retroalimentacion:
        "En tu cuaderno escribiste tres pseudocódigos usando bucles. Esto te permitió pensar como un programador, planear instrucciones paso a paso y usar la repetición de forma lógica. ¡Fantástico! Tus pseudocódigos demuestran que sabes cómo organizar ideas para que se conviertan en acciones. ¡Tu mente está lista para programar!",
      tipoActividad: "imagen",
    },
    {
      id: "nivel4",
      titulo: "Nivel 4: Transfórmalo hacia código en bloques",
      enunciado:
        "Ahora ve a Scratch y transforma los códigos que escribiste en tu cuaderno. Así como se ve en el ejemplo.",
      retroalimentacion:
        "Usaste Scratch para convertir tus pseudocódigos en bloques reales. Programaste bucles que hacen que los personajes repitan acciones, llevando tus ideas del papel a la pantalla. ¡Lo lograste! Transformaste tus ideas en código visual. ¡Tu creatividad y lógica están brillando en Scratch!",
      tipoActividad: "imagen",
    },
  ];

  return (
    <div className="page-practicar-conceptualizacion">
      <h2 className="page-practicar-conceptualizacion__title">
        Llegó la hora de practicar
      </h2>

      <p className="page-practicar-conceptualizacion__description">
        Encontrarás 4 niveles de actividades diseñadas para ayudarte a aprender
        y comprender qué es un bucle en programación.
      </p>

      <div className="page-practicar-conceptualizacion__niveles">
        {niveles.map((nivel) => (
          <div
            key={nivel.id}
            className="page-practicar-conceptualizacion__nivel-card"
          >
            <h3 className="page-practicar-conceptualizacion__nivel-title">
              {nivel.titulo}
            </h3>

            <p className="page-practicar-conceptualizacion__nivel-enunciado">
              {nivel.enunciado}
            </p>

            <div className="page-practicar-conceptualizacion__actividad">
              {nivel.tipoActividad === "juego" ? (
                <div className="page-practicar-conceptualizacion__placeholder">
                  Este es el juego {nivel.id.replace("nivel", "")}
                </div>
              ) : (
                <div className="page-practicar-conceptualizacion__placeholder">
                  Acá va la imagen
                </div>
              )}
            </div>

            <button
              onClick={() => toggleFeedback(nivel.id)}
              className="page-practicar-conceptualizacion__feedback-btn"
            >
              {feedbackVisible[nivel.id]
                ? "Ocultar retroalimentación"
                : "Ver retroalimentación"}
            </button>

            <AnimatePresence mode="wait">
              {feedbackVisible[nivel.id] && (
                <motion.div
                  key={`feedback-${nivel.id}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: "easeIn" }}
                  className="page-practicar-conceptualizacion__feedback"
                >
                  <p className="page-practicar-conceptualizacion__feedback-text">
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
