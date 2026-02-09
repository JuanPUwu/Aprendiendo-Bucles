// React
import { useEffect, useState } from "react";

// Libraries
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

// Components
import Footer from "../../components/Footer.jsx";

// Styles
import "../../styles/common.css";
import "../../styles/settingsModal.css";

export default function CompruebaBucleFor() {
  const storageKey = "compruebaBucleForResult";
  const [selectedAnswers, setSelectedAnswers] = useState({
    pregunta1: null,
    pregunta2: null,
    pregunta3: null,
    pregunta4: null,
    pregunta5: null,
    pregunta6: null,
  });
  const [showFeedback, setShowFeedback] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [modalType, setModalType] = useState("result");
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const savedResult = localStorage.getItem(storageKey);
    if (!savedResult) return;

    try {
      const parsed = JSON.parse(savedResult);
      if (parsed?.selectedAnswers) {
        setSelectedAnswers(parsed.selectedAnswers);
        setShowFeedback(true);
        setIsLocked(true);
      }
    } catch (error) {
      console.error("Error al leer el resultado guardado:", error);
    }
  }, []);

  const handleAnswerChange = (pregunta, respuesta) => {
    if (showFeedback || isLocked) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [pregunta]: respuesta,
    }));
  };

  const handleShowFeedback = () => {
    if (isLocked) {
      setModalType("result");
      setIsResultOpen(true);
      return;
    }

    const allAnswered = preguntas.every(
      (pregunta) => selectedAnswers[pregunta.id],
    );

    if (!allAnswered) {
      setModalType("incomplete");
      setIsResultOpen(true);
      return;
    }

    setModalType("result");
    setShowFeedback(true);
    setIsResultOpen(true);
    setIsLocked(true);

    localStorage.setItem(
      storageKey,
      JSON.stringify({
        selectedAnswers,
        correctCount,
        grade: Number(grade.toFixed(1)),
      }),
    );
    window.dispatchEvent(new Event("progress-updated"));
  };

  const handleCloseResult = () => {
    setIsResultOpen(false);
    if (!isLocked) {
      setShowFeedback(false);
    }
  };

  const preguntas = [
    {
      id: "pregunta1",
      pregunta: "¿Qué permite hacer el bucle for en programación?",
      opciones: [
        {
          id: "a",
          texto: "Ejecutar acciones indefinidamente sin detenerse",
          correcto: false,
        },
        {
          id: "b",
          texto: "Repetir acciones un número determinado de veces",
          correcto: true,
        },
        {
          id: "c",
          texto: "Detener el programa cuando ocurre un error",
          correcto: false,
        },
      ],
    },
    {
      id: "pregunta2",
      pregunta: "¿Cuál es la estructura básica de un bucle for?",
      opciones: [
        { id: "a", texto: "Inicio – condición – incremento", correcto: true },
        { id: "b", texto: "Entrada – proceso – salida", correcto: false },
        { id: "c", texto: "Variable – función – resultado", correcto: false },
      ],
    },
    {
      id: "pregunta3",
      pregunta: "En Scratch, ¿Cómo se simula un bucle for?",
      opciones: [
        { id: "a", texto: "Usando “Por siempre”", correcto: false },
        { id: "b", texto: "Usando “repetir (n)”", correcto: false },
        { id: "c", texto: "Usando “esperando (1) segundos”", correcto: true },
      ],
    },
    {
      id: "pregunta4",
      pregunta: "¿Qué ventaja tiene usar un bucle for en programación?",
      opciones: [
        {
          id: "a",
          texto: "Evitar escribir la misma instrucción varias veces",
          correcto: true,
        },
        {
          id: "b",
          texto: "Hacer que el programa se detenga automáticamente",
          correcto: false,
        },
        {
          id: "c",
          texto: "Cambiar el color del escenario sin código",
          correcto: false,
        },
      ],
    },
    {
      id: "pregunta5",
      pregunta: "¿Qué sucede si el bucle for se programa con 10 repeticiones?",
      opciones: [
        {
          id: "a",
          texto: "El programa se ejecuta indefinidamente",
          correcto: false,
        },
        {
          id: "b",
          texto: "El personaje desaparece del escenario",
          correcto: false,
        },
        {
          id: "c",
          texto: "El bloque dentro del bucle se ejecuta 10 veces",
          correcto: true,
        },
      ],
    },
    {
      id: "pregunta6",
      pregunta: "¿Qué acción se puede repetir con un bucle for en Scratch?",
      opciones: [
        { id: "a", texto: "Cambiar el idioma del programa", correcto: false },
        { id: "b", texto: "Mover al personaje varios pasos", correcto: true },
        {
          id: "c",
          texto: "Guardar automáticamente el proyecto",
          correcto: false,
        },
      ],
    },
  ];

  const enunciados = [
    "Haz que el personaje avance 10 pasos, gire 15 grados y diga “¡Vamos!” en cada repetición, repitiendo esta secuencia 6 veces con un bloque de repetición.",
    "Haz que el personaje toque un sonido, cambie de disfraz y avance 20 pasos, repitiendo toda la secuencia 5 veces con un bloque de repetición.",
  ];

  const correctCount = preguntas.reduce((count, pregunta) => {
    const selectedOptionId = selectedAnswers[pregunta.id];
    const selectedOption = pregunta.opciones.find(
      (opcion) => opcion.id === selectedOptionId,
    );

    return selectedOption?.correcto ? count + 1 : count;
  }, 0);

  const grade = 1 + (4 * correctCount) / preguntas.length;

  return (
    <div className="page-comprueba-bucle-for page-container page-container--with-padding">
      <h2 className="page-comprueba-bucle-for__title page-title">
        Comprueba tu aprendizaje y revisa tu progreso
      </h2>

      <p className="page-comprueba-bucle-for__description page-description page-description--large">
        En esta etapa, debes completar el cuestionario que incluye 4 preguntas y
        2 ejercicios prácticos; al resolverlos, transformarás la teoría en
        práctica y fortalecerás tu dominio de los bucles en programación.
      </p>

      <blockquote className="page-comprueba-bucle-for__quote quote">
        “El aprendizaje es experiencia, todo lo demás es información.”– Albert
        Einstein
      </blockquote>

      <div className="page-comprueba-bucle-for__cuestionario card-list">
        {preguntas.map((pregunta, index) => (
          <div
            key={pregunta.id}
            className="page-comprueba-bucle-for__pregunta card"
          >
            <h3 className="page-comprueba-bucle-for__pregunta-titulo">
              {index + 1}. {pregunta.pregunta}
            </h3>
            <div className="page-comprueba-bucle-for__opciones options">
              {pregunta.opciones.map((opcion) => (
                <label
                  key={opcion.id}
                  className={`page-comprueba-bucle-for__opcion option ${
                    selectedAnswers[pregunta.id] === opcion.id ? "selected" : ""
                  } ${
                    showFeedback
                      ? opcion.correcto
                        ? "correct"
                        : selectedAnswers[pregunta.id] === opcion.id
                          ? "incorrect"
                          : ""
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name={pregunta.id}
                    value={opcion.id}
                    checked={selectedAnswers[pregunta.id] === opcion.id}
                    onChange={() => handleAnswerChange(pregunta.id, opcion.id)}
                    disabled={showFeedback || isLocked}
                  />
                  <span className="option__text">{opcion.texto}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <button
          onClick={handleShowFeedback}
          className="page-comprueba-bucle-for__feedback-btn btn-standard"
        >
          {showFeedback || isLocked ? "Ver nota" : "Ver resultados"}
        </button>

        <div className="page-comprueba-bucle-for__enunciados card-list">
          {enunciados.map((enunciado, index) => (
            <div
              key={index}
              className="page-comprueba-bucle-for__enunciado card"
            >
              <h3 className="page-comprueba-bucle-for__enunciado-titulo">
                Enunciado {index + 1}:
              </h3>
              <p className="page-comprueba-bucle-for__enunciado-texto">
                {enunciado}
              </p>
            </div>
          ))}
        </div>

        <Popup
          open={isResultOpen}
          onClose={handleCloseResult}
          modal
          closeOnDocumentClick
          overlayClassName="modal-overlay"
          className="modal-container"
        >
          <div className="modal-header">
            <h2>Resultado</h2>
            <button
              className="modal-close-btn"
              onClick={handleCloseResult}
              aria-label="Cerrar modal"
            >
              ✕
            </button>
          </div>
          <div className="modal-body">
            {modalType === "incomplete" ? (
              <p>Debes completar las 6 preguntas antes de ver el resultado.</p>
            ) : (
              <>
                <p>
                  Has obtenido {correctCount}{" "}
                  {correctCount === 1
                    ? "respuesta correcta"
                    : "respuestas correctas"}
                </p>
                <p>Nota: {grade.toFixed(1)}/5.0</p>
              </>
            )}
          </div>
        </Popup>
      </div>

      <Footer />
    </div>
  );
}
