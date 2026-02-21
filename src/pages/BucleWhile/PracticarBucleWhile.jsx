// React
import { useState } from "react";

// Components
import Footer from "../../components/Footer.jsx";

// Libraries
import { motion, AnimatePresence } from "framer-motion";

// Styles
import "../../styles/common.css";

// Fondo
import fondo from "../../assets/img/fondo-bucleWhile.png";

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

export default function PracticarBucleWhile() {
  const [feedbackVisible, setFeedbackVisible] = useState({});

  const niveles = [
    {
      id: 1,
      titulo: "Nivel 1: Hasta el límite del escenario",
      enunciado:
        "Haz que tu personaje avance hasta tocar el borde del escenario.",
      retroalimentacion:
        "Aquí exploraste el uso de condiciones para controlar el movimiento. Comprendiste que el personaje puede avanzar y detenerse según lo que ocurre en el escenario. ¡Excelente trabajo! Estás aprendiendo a usar límites en tus programas.",
      img: imgWhile1,
    },
    {
      id: 2,
      titulo: "Nivel 2: Siguiendo al puntero",
      enunciado:
        "Haz que tu personaje gire 20 grados siguiendo el puntero del ratón.",
      retroalimentacion:
        "En esta actividad aprendiste a interactuar con el ratón. Comprendiste que los movimientos del puntero pueden influir directamente en el comportamiento del personaje. ¡Muy bien! Estás integrando interacción en tiempo real.",
      img: imgWhile2,
    },
    {
      id: 3,
      titulo: "Nivel 3: Un saludo condicionado",
      enunciado:
        'Haz que tu personaje salude mientras no se presione la tecla espacio.',
      retroalimentacion:
        "Aquí trabajaste con condiciones lógicas. Comprendiste que una acción puede ejecutarse solo cuando se cumple una condición específica. ¡Excelente! Estás dando un gran paso en el control del flujo del programa.",
      img: imgWhile3,
    },
    {
      id: 4,
      titulo: "Nivel 4: Transformación con límite",
      enunciado:
        "Haz que tu personaje cambie de disfraz hasta que toque el borde del escenario.",
      retroalimentacion:
        "En esta actividad combinaste cambios visuales con condiciones. Comprendiste que una acción puede repetirse hasta que ocurra un evento. ¡Muy bien! Tus animaciones ahora responden al entorno.",
      img: imgWhile4,
    },
    {
      id: 5,
      titulo: "Nivel 5: Acercándose al objetivo",
      enunciado:
        "Haz que tu personaje avance 5 pasos hasta tocar el puntero del ratón.",
      retroalimentacion:
        "Aquí exploraste la interacción entre el personaje y el puntero. Comprendiste que el movimiento puede detenerse cuando se alcanza un objetivo. ¡Excelente trabajo! Estás creando comportamientos más precisos.",
      img: imgWhile5,
    },
    {
      id: 6,
      titulo: "Nivel 6: Decisiones con números",
      enunciado:
        'Haz que tu personaje gire según si un número es mayor o menor.',
      retroalimentacion:
        "En esta actividad aprendiste a tomar decisiones usando comparaciones. Comprendiste que las condiciones permiten que el programa elija diferentes acciones. ¡Muy bien! Estás desarrollando el pensamiento lógico.",
      img: imgWhile6,
    },
    {
      id: 7,
      titulo: "Nivel 7: Contando paso a paso",
      enunciado:
        "Haz que el programa sume valores a un contador.",
      retroalimentacion:
        "Aquí descubriste cómo usar variables para llevar un registro. Comprendiste que los contadores permiten almacenar y actualizar información. ¡Excelente trabajo! Estás introduciéndote al uso de datos en programación.",
      img: imgWhile7,
    },
    {
      id: 8,
      titulo: "Nivel 8: Movimiento y cambio con control",
      enunciado:
        'Haz que tu personaje gire 10 grados y cambie de disfraz hasta que se presione una tecla.',
      retroalimentacion:
        "En esta actividad combinaste movimiento, apariencia y eventos. Comprendiste que una acción puede repetirse hasta que el usuario interactúe. ¡Muy bien! Tus programas ahora son más interactivos.",
      img: imgWhile8,
    },
    {
      id: 9,
      titulo: "Nivel 9: Entre el orden y el azar",
      enunciado:
        "Haz que tu personaje vaya al centro del escenario y luego se mueva a una posición aleatoria.",
      retroalimentacion:
        "Aquí exploraste posiciones fijas y aleatorias. Comprendiste que el personaje puede moverse de forma controlada o impredecible. ¡Excelente trabajo! Estás enriqueciendo la dinámica de tus programas.",
      img: imgWhile9,
    },
    {
      id: 10,
      titulo: "Nivel 10: Animación con persecución",
      enunciado:
        'Haz que el personaje cambie de disfraz, avance 10 pasos y toque un sonido mientras no alcance al puntero del ratón. Cuando finalmente lo toque, debe decir "¡Te encontré!"',
      retroalimentacion:
        "Aquí diseñaste una animación interactiva que combina movimiento, apariencia y sonido dentro de un bucle while. Comprendiste que la condición controla cuándo detener la secuencia y ejecutar una acción final. ¡Excelente! Estás aplicando lógica avanzada y creatividad para construir programas dinámicos e inteligentes.",
    },
  ];

  const toggleFeedback = (nivelId) => {
    setFeedbackVisible((prev) => ({
      ...prev,
      [nivelId]: prev[nivelId] ? prev[nivelId] : true,
    }));
  };

  return (
    <div
      className="page-practicar-bucle-while page-container"
      style={{ "--page-bg": `url(${fondo})` }}
    >
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

            {nivel.id !== 10 && (
              <div className="page-practicar-bucle-while__imagen-placeholder placeholder">
                <img
                  src={nivel.img}
                  alt={`Actividad ${nivel.id}`}
                  className="page-practicar-bucle-while__actividad-img"
                />
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
