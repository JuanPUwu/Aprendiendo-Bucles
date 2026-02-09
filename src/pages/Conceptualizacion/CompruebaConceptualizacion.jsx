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

export default function CompruebaConceptualizacion() {
  const storageKey = "compruebaConceptualizacionResult";
  const [selectedAnswers, setSelectedAnswers] = useState({
    pregunta1: null,
    pregunta2: null,
    pregunta3: null,
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
      pregunta: "¿Qué es un bucle y para qué sirve en programación?",
      opciones: [
        {
          id: "a",
          texto: "Es un error en el código que detiene el programa",
          correcto: false,
        },
        {
          id: "b",
          texto:
            "Es una estructura que permite repetir instrucciones varias veces",
          correcto: true,
        },
        {
          id: "c",
          texto: "Es un bloque que solo se usa para realizar animaciones",
          correcto: false,
        },
      ],
    },
    {
      id: "pregunta2",
      pregunta: "¿Cuál es la diferencia entre un bucle for y un bucle while?",
      opciones: [
        {
          id: "a",
          texto:
            "El bucle for repite un número indefinido de veces, en cambio, el bucle while se repite mientras se cumpla una condición",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "El bucle for solo sirve para gráficos y el bucle while para sonidos",
          correcto: false,
        },
        {
          id: "c",
          texto: "No hay ninguna diferencia, ambos hacen exactamente lo mismo",
          correcto: false,
        },
      ],
    },
    {
      id: "pregunta3",
      pregunta:
        "¿Por qué los bucles facilitan la repetición de instrucciones en un programa?",
      opciones: [
        {
          id: "a",
          texto: "Porque hacen que el programa sea más lento",
          correcto: false,
        },
        {
          id: "b",
          texto: "Porque eliminan todas las condiciones del código",
          correcto: false,
        },
        {
          id: "c",
          texto: "Porque evitan escribir la misma instrucción muchas veces",
          correcto: true,
        },
      ],
    },
  ];

  const enunciados = [
    "Haz que un personaje camine 10 pasos repetidos 5 veces usando un bloque de repetición.",
    'Crea un bucle para que el personaje diga "¡Hola!, ¿Cómo estás?", avance 12 pasos y diga "¡Adiós!" tres veces seguidas.',
  ];

  const correctCount = preguntas.reduce((count, pregunta) => {
    const selectedOptionId = selectedAnswers[pregunta.id];
    const selectedOption = pregunta.opciones.find(
      (opcion) => opcion.id === selectedOptionId,
    );

    return selectedOption?.correcto ? count + 1 : count;
  }, 0);

  const gradeByCorrect = {
    0: 1.0,
    1: 1.6,
    2: 3.2,
    3: 5.0,
  };

  const grade = gradeByCorrect[correctCount] ?? 1.0;

  return (
    <div className="page-comprueba-conceptualizacion page-container page-container--with-padding">
      <h2 className="page-comprueba-conceptualizacion__title page-title">
        Comprueba tu aprendizaje y revisa tu progreso
      </h2>

      <p className="page-comprueba-conceptualizacion__description page-description page-description--large">
        En esta etapa, debes completar el cuestionario que incluye 3 preguntas y
        2 ejercicios prácticos; al resolverlos, transformarás la teoría en
        práctica y fortalecerás tu dominio de los bucles en programación.
      </p>

      <blockquote className="page-comprueba-conceptualizacion__quote quote">
        "La programación no es sobre lo que sabes, sino sobre lo que puedes
        descubrir." – Chris Pine
      </blockquote>

      <div className="page-comprueba-conceptualizacion__cuestionario card-list">
        {preguntas.map((pregunta, index) => (
          <div
            key={pregunta.id}
            className="page-comprueba-conceptualizacion__pregunta card"
          >
            <h3 className="page-comprueba-conceptualizacion__pregunta-titulo">
              {index + 1}. {pregunta.pregunta}
            </h3>
            <div className="page-comprueba-conceptualizacion__opciones options">
              {pregunta.opciones.map((opcion) => (
                <label
                  key={opcion.id}
                  className={`page-comprueba-conceptualizacion__opcion option ${
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

        <div className="page-comprueba-conceptualizacion__enunciados card-list">
          {enunciados.map((enunciado, index) => (
            <div
              key={index}
              className="page-comprueba-conceptualizacion__enunciado card"
            >
              <h3 className="page-comprueba-conceptualizacion__enunciado-titulo">
                Enunciado {index + 1}:
              </h3>
              <p className="page-comprueba-conceptualizacion__enunciado-texto">
                {enunciado}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={handleShowFeedback}
          className="page-comprueba-conceptualizacion__feedback-btn btn-standard"
        >
          {showFeedback || isLocked ? "Ver nota" : "Ver resultados"}
        </button>

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
              <p>Debes completar las 3 preguntas antes de ver el resultado.</p>
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
