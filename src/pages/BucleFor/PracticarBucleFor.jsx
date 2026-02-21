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

// Img
import imgWhile1 from "../../assets/img/while-1.jpeg";
import imgWhile2 from "../../assets/img/while-2.jpeg";
import imgWhile3 from "../../assets/img/while-3.jpeg";
import imgWhile4 from "../../assets/img/while-4.jpeg";
import imgWhile5 from "../../assets/img/while-5.jpeg";
import imgWhile6 from "../../assets/img/while-6.jpeg";
import imgWhile7 from "../../assets/img/while-7.jpeg";
import imgWhile8 from "../../assets/img/while-8.jpeg";
import imgWhile9 from "../../assets/img/while-9.jpeg";

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
      titulo: "Nivel 1: Avanzando con repetición",
      enunciado: "Haz que tu personaje avance 10 pasos y repita esta acción 5 veces.",
      retroalimentacion:
        'Aquí aprendiste a combinar movimiento con repetición. Comprendiste que usar ciclos permite que el personaje avance varias veces sin repetir bloques. ¡Excelente trabajo! Estás fortaleciendo tu comprensión de los bucles.',
      img: imgWhile1,
    },
    {
      id: "nivel2",
      titulo: "Nivel 2: Girando con precisión",
      enunciado:
        "Haz que tu personaje realice 3 giros de 20 grados.",
      retroalimentacion:
        "En esta actividad exploraste cómo controlar giros específicos usando repetición. Comprendiste que ajustar los grados y la cantidad de repeticiones cambia el resultado del movimiento. ¡Muy bien! Estás afinando el control del movimiento.",
      img: imgWhile2,
    },
    {
      id: "nivel3",
      titulo: "Nivel 3: Saludos que se repiten",
      enunciado: 'Haz que tu personaje diga un saludo 4 veces.',
      retroalimentacion:
        "Aquí descubriste cómo repetir mensajes usando ciclos. Comprendiste que la repetición es útil para reforzar acciones sin duplicar código. ¡Buen trabajo! Tus programas ahora son más ordenados.",
      img: imgWhile3,
    },
    {
      id: "nivel4",
      titulo: "Nivel 4: Transformaciones repetidas",
      enunciado: "Haz que tu personaje cambie de disfraz dos veces.",
      retroalimentacion:
        "En esta actividad reforzaste el uso de cambios visuales mediante repetición. Comprendiste que alternar disfraces ayuda a simular movimiento. ¡Excelente! Estás dando más dinamismo a tus animaciones.",
      img: imgWhile4,
    },
    {
      id: "nivel5",
      titulo: "Nivel 5: Regresando al punto inicial",
      enunciado:
        "Haz que tu personaje vaya al centro del escenario 4 veces.",
      retroalimentacion:
        "Aquí aprendiste a usar posiciones específicas para controlar el movimiento. Comprendiste que volver al centro ayuda a reiniciar acciones o animaciones. ¡Muy bien! Estás organizando mejor el comportamiento del personaje.",
      img: imgWhile5,
    },
    {
      id: "nivel6",
      titulo: "Nivel 6: Jugando con el azar",
      enunciado:
        "Haz que tu personaje diga un número aleatorio.",
      retroalimentacion:
        "En esta actividad exploraste el uso del azar en programación. Comprendiste que los números aleatorios hacen que cada ejecución sea diferente. ¡Excelente trabajo! Estás creando programas más interesantes y variados.",
      img: imgWhile6,
    },
    {
      id: "nivel7",
      titulo: "Nivel 7: Contando con diversión",
      enunciado:
        "Haz que tu personaje cuente frutas.",
      retroalimentacion:
        "Aquí practicaste el conteo usando secuencias o repeticiones. Comprendiste que contar elementos ayuda a representar información de forma ordenada. ¡Muy bien! Estás aplicando la lógica de conteo en tus programas.Aquí practicaste el conteo usando secuencias o repeticiones. Comprendiste que contar elementos ayuda a representar información de forma ordenada. ¡Muy bien! Estás aplicando la lógica de conteo en tus programas.",
      img: imgWhile7,
    },
    {
      id: "nivel8",
      titulo: "Nivel 8: Contando en el cielo",
      enunciado:
        'Haz que tu personaje cuente estrellas.',
      retroalimentacion:
        "En esta actividad reforzaste el conteo mediante programación. Comprendiste que repetir acciones permite contar de manera clara y estructurada. ¡Excelente! Sigues fortaleciendo tu pensamiento lógico.",
      img: imgWhile8,
    },
    {
      id: "nivel9",
      titulo: "Nivel 9: Del uno al diez con código",
      enunciado:
        "Haz que tu personaje cuente del 1 al 10.",
      retroalimentacion:
        "Aquí integraste secuencia y conteo numérico. Comprendiste cómo organizar números en orden ascendente usando programación. ¡Gran trabajo! Estás consolidando habilidades fundamentales para retos más avanzados.",
      img: imgWhile9,
    },
    {
      id: "nivel10",
      titulo: "Nivel 10: Animación continua",
      enunciado:
        "Crea una animación en Scratch donde un personaje se desplace, gire, cambie de disfraz y de colores, mientras lleva a cabo una recolección de objetos. Durante la animación, el personaje debe contar elementos (frutas, estrellas, números).",
      retroalimentacion:
        "Aquí creaste una animación fluida combinando movimiento y disfraces dentro de un bucle. Reconociste que la repetición da continuidad y ritmo visual. ¡Muy bien! Estás programando con creatividad y lógica avanzada.",
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

            {nivel.id !== "nivel10" && (
              <div className="page-practicar-bucle-for__actividad placeholder">
                <img
                  src={nivel.img}
                  alt={`Actividad ${nivel.id.replace("nivel", "")}`}
                  className="page-practicar-bucle-for__actividad-img"
                />
              </div>
            )}

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
