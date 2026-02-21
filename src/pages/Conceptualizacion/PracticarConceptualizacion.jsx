// React
import { useState } from "react";

// Components
import Footer from "../../components/Footer.jsx";

// Libraries
import { motion, AnimatePresence } from "framer-motion";

// Styles
import "../../styles/common.css";

// Fondo
import fondo from "../../assets/img/fondo-conceptualizacion.png";

export default function PracticarConceptualizacion() {
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
      titulo: "Nivel 1: Primer paso hacia la programación",
      enunciado: "Haz que tu personaje avance 10 pasos al iniciar el programa.",
      retroalimentacion:
        "Aquí ejecutaste un movimiento sencillo, comprendiendo cómo los bloques permiten que el personaje avance en el escenario. Reconociste la importancia de iniciar con un evento y dar acción al código. ¡Muy bien! Estás aprendiendo a controlar el movimiento con precisión.",
      tipoActividad: "juego",
    },
    {
      id: "nivel2",
      titulo: "Nivel 2: Un giro divertido",
      enunciado:
        "Explora cómo cambia la orientación del personaje al girar 15 grados.",
      retroalimentacion:
        "Aquí exploraste cómo el personaje cambia de orientación al girar. Comprendiste que los bloques de rotación modifican la dirección y enriquecen la animación. ¡Excelente trabajo! Estás descubriendo cómo dar dinamismo a tus programas.",
      tipoActividad: "juego",
    },
    {
      id: "nivel3",
      titulo: "Nivel 3: ¡Hola, Scratch!",
      enunciado: "Muestra un mensaje en pantalla para que tu personaje salude.",
      retroalimentacion:
        "Aquí lograste que el personaje se comunique mostrando un mensaje. Reconociste que los bloques de apariencia permiten interacción visual con el usuario. ¡Muy bien hecho! Estás creando programas expresivos y cercanos.",
      tipoActividad: "imagen",
    },
    {
      id: "nivel4",
      titulo: "Nivel 4: Cambio de disfraz mágico",
      enunciado: "Transforma visualmente al personaje cambiando su disfraz.",
      retroalimentacion:
        "Aquí transformaste al personaje cambiando su disfraz. Comprendiste que los bloques de apariencia generan variedad y creatividad en las animaciones. ¡Fantástico! Estás aprendiendo a dar vida y personalidad a tus proyectos.",
      tipoActividad: "imagen",
    },
    {
      id: "nivel5",
      titulo: "Nivel 5: Vuelve al centro",
      enunciado:
        "Ubica al personaje en la posición inicial del escenario (x:0, y:0).",
      retroalimentacion:
        "Aquí ubicaste al personaje en una posición específica del escenario. Reconociste cómo los bloques de movimiento permiten controlar coordenadas y ubicaciones. ¡Excelente! Estás desarrollando lógica espacial en programación.",
      tipoActividad: "imagen",
    },
    {
      id: "nivel6",
      titulo: "Nivel 6: Caminar sin parar",
      enunciado:
        "Haz que el personaje avance varias veces de forma automática.",
      retroalimentacion:
        "Aquí repetiste un movimiento varias veces, comprendiendo cómo los bucles automatizan acciones. Visualizaste que el código puede ejecutar secuencias sin necesidad de repetir bloques manualmente. ¡Muy bien! Estás programando con eficiencia.",
      tipoActividad: "imagen",
    },
    {
      id: "nivel7",
      titulo: "Nivel 7: Giro completo",
      enunciado:
        "Logra que el personaje dé una vuelta completa repitiendo giros.",
      retroalimentacion:
        "Aquí lograste que el personaje diera una vuelta completa. Comprendiste que los bucles permiten acumular pequeños giros hasta formar un círculo. ¡Excelente! Estás aplicando la lógica de repetición para crear efectos continuos.",
      tipoActividad: "imagen",
    },
    {
      id: "nivel8",
      titulo: "Nivel 8: Saludos repetidos",
      enunciado: "Haz que el personaje repita un saludo varias veces.",
      retroalimentacion:
        "Aquí hiciste que el personaje saludara varias veces. Reconociste que los bucles permiten repetir mensajes y dar ritmo a la interacción. ¡Muy bien hecho! Estás creando programas más dinámicos y comunicativos.",
      tipoActividad: "imagen",
    },
    {
      id: "nivel9",
      titulo: "Nivel 9: Ida y vuelta",
      enunciado: "Simula un movimiento de avanzar y retroceder con un bucle.",
      retroalimentacion:
        "Aquí simulaste un movimiento de avanzar y retroceder. Comprendiste que los bucles pueden combinar acciones opuestas para generar patrones. ¡Fantástico! Estás explorando cómo la repetición construye secuencias más complejas.",
      tipoActividad: "imagen",
    },
    {
      id: "nivel10",
      titulo: "Nivel 10: Mini animación",
      enunciado:
        "Crea una animación sencilla cambiando disfraces en secuencia.",
      retroalimentacion:
        "Aquí creaste una animación sencilla cambiando disfraces en secuencia. Reconociste que los bucles permiten dar continuidad y fluidez a las imágenes. ¡Excelente trabajo! Estás programando con creatividad y ritmo visual.",
      tipoActividad: "imagen",
    },
  ];

  return (
    <div
      className="page-practicar-conceptualizacion page-container page-container--with-padding"
      style={{ "--page-bg": `url(${fondo})` }}
    >
      <h2 className="page-practicar-conceptualizacion__title page-title">
        Llegó la hora de practicar
      </h2>

      <p className="page-practicar-conceptualizacion__description page-subtitle">
        Encontrarás 10 niveles de actividades diseñadas para ayudarte a aprender
        y comprender qué es un bucle en programación.
      </p>

      <div className="page-practicar-conceptualizacion__niveles card-list">
        {niveles.map((nivel) => (
          <div
            key={nivel.id}
            className="page-practicar-conceptualizacion__nivel-card card"
          >
            <h3 className="page-practicar-conceptualizacion__nivel-title card__title">
              {nivel.titulo}
            </h3>

            <p className="page-practicar-conceptualizacion__nivel-enunciado card__text">
              {nivel.enunciado}
            </p>

            <div className="page-practicar-conceptualizacion__actividad placeholder">
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
              className="page-practicar-conceptualizacion__feedback-btn btn-standard"
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
                  className="page-practicar-conceptualizacion__feedback feedback"
                >
                  <p className="page-practicar-conceptualizacion__feedback-text feedback__text">
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
