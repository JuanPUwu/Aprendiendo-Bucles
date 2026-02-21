// React
import { useState } from "react";

// Components
import Footer from "../../components/Footer.jsx";

// Libraries
import { motion, AnimatePresence } from "framer-motion";

// Styles
import "../../styles/common.css";

// Fondo
import fondo from "../../assets/img/fondo-bucleFor.png";

export default function PracticarBucleFor() {
  const [feedbackVisible, setFeedbackVisible] = useState({
    nivel1: false,
    nivel2: false,
    nivel3: false,
    nivel4: false,
    nivel5: false,
    nivel6: false,
    nivel7: false,
    nivel8: false,
    nivel9: false,
    nivel10: false,
  });

  const toggleFeedback = (nivel) => {
    setFeedbackVisible((prev) => ({
      ...prev,
      [nivel]: prev[nivel] ? prev[nivel] : true,
    }));
  };

  const niveles = [
    {
      id: "nivel1",
      titulo: "Nivel 1: Pasos contados",
      enunciado: "Haz que el personaje avance 10 pasos repetidos 5 veces.",
      retroalimentacion:
        'Aquí aplicaste un bucle sencillo para repetir un movimiento. Comprendiste que el bloque "Repetir" evita escribir la misma acción varias veces. ¡Excelente! Estás aprendiendo a programar con orden y eficiencia.',
      tipoActividad: "juego",
    },
    {
      id: "nivel2",
      titulo: "Nivel 2: Giro programado",
      enunciado:
        "Haz que el personaje gire 15 grados, repitiendo la acción 12 veces.",
      retroalimentacion:
        "Aquí lograste que el personaje completara un giro usando repetición. Reconociste cómo los bucles acumulan pequeñas acciones hasta formar un resultado mayor. ¡Muy bien! Estás descubriendo la lógica detrás de los movimientos circulares.",
      tipoActividad: "juego",
    },
    {
      id: "nivel3",
      titulo: "Nivel 3: Saludos múltiples",
      enunciado: 'Haz que el personaje diga "¡Hola!" tres veces seguidas.',
      retroalimentacion:
        "Aquí repetiste un mensaje varias veces, comprendiendo que los bucles también sirven para la comunicación. ¡Excelente! Estás creando programas más expresivos y dinámicos.",
      tipoActividad: "imagen",
    },
    {
      id: "nivel4",
      titulo: "Nivel 4: Cambio de disfraz repetido",
      enunciado: "Haz que el personaje cambie de disfraz 4 veces seguidas.",
      retroalimentacion:
        "Aquí exploraste cómo los bucles permiten variar la apariencia del personaje sin repetir bloques manualmente. ¡Fantástico! Estás aprendiendo a dar ritmo y creatividad a tus animaciones.",
      tipoActividad: "imagen",
    },
    {
      id: "nivel5",
      titulo: "Nivel 5: Saltos al centro",
      enunciado:
        "Haz que el personaje vaya al centro del escenario 3 veces seguidas.",
      retroalimentacion:
        "Aquí usaste el bucle para repetir una ubicación específica. Comprendiste que la repetición también puede aplicarse a posiciones. ¡Muy bien! Estás desarrollando lógica espacial con programación.",
      tipoActividad: "imagen",
    },
    {
      id: "nivel6",
      titulo: "Nivel 6: Caminar con ritmo",
      enunciado:
        "Haz que el personaje avance 20 pasos y luego espere 1 segundo, repitiendo la secuencia 5 veces.",
      retroalimentacion:
        "Aquí combinaste movimiento y espera dentro de un bucle. Reconociste que la repetición puede incluir varias acciones en secuencia. ¡Excelente! Estás creando programas con ritmo y cadencia.",
      tipoActividad: "imagen",
    },
    {
      id: "nivel7",
      titulo: "Nivel 7: Círculo perfecto",
      enunciado:
        "Haz que el personaje gire 10 grados y avance 5 pasos, repitiendo la acción 18 veces.",
      retroalimentacion:
        "Aquí lograste que el personaje trazara un círculo en el escenario. Comprendiste cómo los bucles permiten construir figuras geométricas. ¡Muy bien! Estás aplicando lógica matemática en programación.",
      tipoActividad: "imagen",
    },
    {
      id: "nivel8",
      titulo: "Nivel 8: Saludos animados",
      enunciado:
        'Haz que el personaje diga "¡Hola!" y cambie de disfraz, repitiendo la secuencia 5 veces.',
      retroalimentacion:
        "Aquí combinaste apariencia y comunicación dentro de un bucle. Reconociste que la repetición puede dar vida a interacciones más creativas. ¡Fantástico! Estás programando con expresividad y dinamismo.",
      tipoActividad: "imagen",
    },
    {
      id: "nivel9",
      titulo: "Nivel 9: Camino de ida y vuelta",
      enunciado:
        "Haz que el personaje avance 30 pasos y luego retroceda 30 pasos, repitiendo la secuencia 4 veces.",
      retroalimentacion:
        "Aquí simulaste un movimiento de ida y vuelta con bucles. Comprendiste cómo la repetición puede generar patrones más complejos. ¡Excelente! Estás explorando la lógica de secuencias opuestas.",
      tipoActividad: "imagen",
    },
    {
      id: "nivel10",
      titulo: "Nivel 10: Animación continua",
      enunciado:
        "Haz que el personaje cambie de disfraz y avance 10 pasos, repitiendo la acción 20 veces.",
      retroalimentacion:
        "Aquí creaste una animación fluida combinando movimiento y disfraces dentro de un bucle. Reconociste que la repetición da continuidad y ritmo visual. ¡Muy bien! Estás programando con creatividad y lógica avanzada.",
      tipoActividad: "imagen",
    },
  ];

  return (
    <div
      className="page-practicar-bucle-for page-container page-container--with-padding"
      style={{ "--page-bg": `url(${fondo})` }}
    >
      <h2 className="page-practicar-bucle-for__title page-title">
        Llegó la hora de practicar
      </h2>

      <p className="page-practicar-bucle-for__description page-subtitle">
        Encontrarás 10 niveles de actividades diseñadas para ayudarte a aprender
        y comprender qué es y cómo funciona el bucle for en programación;
        atrévete a resolverlos y confirma lo que sabes.
      </p>

      <div className="page-practicar-bucle-for__niveles card-list">
        {niveles.map((nivel) => (
          <div
            key={nivel.id}
            className="page-practicar-bucle-for__nivel-card card"
          >
            <h3 className="page-practicar-bucle-for__nivel-title card__title">
              {nivel.titulo}
            </h3>

            <p className="page-practicar-bucle-for__nivel-enunciado card__text">
              {nivel.enunciado}
            </p>

            <div className="page-practicar-bucle-for__actividad placeholder">
              {nivel.tipoActividad === "juego" ? (
                <div className="page-practicar-bucle-for__placeholder">
                  Este es el juego {nivel.id.replace("nivel", "")}
                </div>
              ) : (
                <div className="page-practicar-bucle-for__placeholder">
                  Acá va la imagen
                </div>
              )}
            </div>

            <button
              onClick={() => toggleFeedback(nivel.id)}
              className="page-practicar-bucle-for__feedback-btn btn-standard"
              disabled={feedbackVisible[nivel.id]}
            >
              Ver resultados
            </button>

            <AnimatePresence mode="wait">
              {feedbackVisible[nivel.id] && (
                <motion.div
                  key={`feedback-${nivel.id}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: "easeIn" }}
                  className="page-practicar-bucle-for__feedback feedback"
                >
                  <p className="page-practicar-bucle-for__feedback-text feedback__text">
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
