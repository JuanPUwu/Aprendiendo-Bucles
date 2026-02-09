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

export default function CompruebaBucleWhile() {
  const storageKey = "compruebaBucleWhileResult";
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [showDragFeedback, setShowDragFeedback] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [modalType, setModalType] = useState("result");
  const [isLocked, setIsLocked] = useState(false);

  const dragStatements = [
    {
      id: "s1",
      texto:
        "El bucle repetir mientras se ejecuta solo si la condición es verdadera.",
      correcta: true,
    },
    {
      id: "s2",
      texto: "Es útil para controlar acciones mientras se presiona una tecla.",
      correcta: true,
    },
    {
      id: "s3",
      texto:
        "Se detiene automáticamente cuando la condición deja de cumplirse.",
      correcta: true,
    },
    {
      id: "s4",
      texto:
        "El bucle repetir mientras se ejecuta siempre, incluso sin condición.",
      correcta: false,
    },
    {
      id: "s5",
      texto: "No se puede usar con teclas presionadas.",
      correcta: false,
    },
    {
      id: "s6",
      texto: "No sirve para juegos ni simulaciones.",
      correcta: false,
    },
  ];

  const initialDragState = {
    correcto: [],
    incorrecto: [],
    pool: dragStatements.map((item) => item.id),
  };

  const [dragState, setDragState] = useState(initialDragState);

  useEffect(() => {
    const savedResult = localStorage.getItem(storageKey);
    if (!savedResult) return;

    try {
      const parsed = JSON.parse(savedResult);
      if (parsed?.selectedAnswers && parsed?.dragState) {
        setSelectedAnswers(parsed.selectedAnswers);
        setDragState(parsed.dragState);
        setShowFeedback(true);
        setShowDragFeedback(true);
        setIsLocked(true);
      }
    } catch (error) {
      console.error("Error al leer el resultado guardado:", error);
    }
  }, []);

  const preguntas = [
    {
      id: 1,
      pregunta: "¿Qué hace un bucle while en Scratch?",
      opciones: [
        {
          id: "a",
          texto: "Repite acciones un número fijo de veces",
          correcto: false,
        },
        {
          id: "b",
          texto: "Repite acciones mientras una condición sea verdadera",
          correcto: true,
        },
        { id: "c", texto: "Ejecuta acciones solo una vez", correcto: false },
      ],
    },
    {
      id: 2,
      pregunta: "¿Cuál de estas condiciones podría usarse en un bucle while?",
      opciones: [
        {
          id: "a",
          texto: '"Mientras la tecla espacio esté presionada"',
          correcto: true,
        },
        { id: "b", texto: '"Repetir (10) veces"', correcto: false },
        { id: "c", texto: '"Al presionar la bandera verde"', correcto: false },
      ],
    },
    {
      id: 3,
      pregunta:
        "¿Qué ocurre cuando la condición del bucle while deja de cumplirse?",
      opciones: [
        { id: "a", texto: "El bucle sigue infinitamente", correcto: false },
        { id: "b", texto: "El bucle se detiene", correcto: true },
        { id: "c", texto: "El programa se reinicia", correcto: false },
      ],
    },
    {
      id: 4,
      pregunta: "¿Cuál es una ventaja del bucle while en Scratch?",
      opciones: [
        {
          id: "a",
          texto: "Permite repetir acciones sin depender de condiciones",
          correcto: false,
        },
        {
          id: "b",
          texto: "Es más rápido que todos los demás bloques",
          correcto: false,
        },
        {
          id: "c",
          texto: "Permite repetir acciones controladas por una condición",
          correcto: true,
        },
      ],
    },
    {
      id: 5,
      pregunta: "¿Qué bloque en Scratch se usa para simular un bucle while?",
      opciones: [
        { id: "a", texto: '"Repetir (n) veces"', correcto: false },
        { id: "b", texto: '"Repetir hasta que…"', correcto: true },
        { id: "c", texto: '"Al presionar la bandera verde"', correcto: false },
      ],
    },
    {
      id: 6,
      pregunta:
        "¿Qué sucede si la condición de un bucle while siempre se cumple?",
      opciones: [
        {
          id: "a",
          texto: "El bucle se ejecuta indefinidamente",
          correcto: true,
        },
        { id: "b", texto: "El bucle no se ejecuta nunca", correcto: false },
        {
          id: "c",
          texto: "El programa se detiene automáticamente",
          correcto: false,
        },
      ],
    },
  ];

  const enunciados = [
    'Haz que el personaje avance 15 pasos, gire 10 grados y toque un sonido mientras no toque el borde del escenario. Cuando finalmente lo toque, debe decir "¡Llegué al límite!" y cambiar de disfraz.',
    'Haz que el personaje se desplace 20 pasos hacia el puntero del ratón, cambiando de disfraz en cada repetición, mientras no lo alcance. Cuando logre tocarlo, debe decir "¡Te atrapé!" y reproducir un sonido de victoria.',
  ];

  const handleAnswerSelect = (preguntaId, opcionId) => {
    if (!showFeedback && !isLocked) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [preguntaId]: opcionId,
      }));
    }
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

    const allStatementsPlaced = dragState.pool.length === 0;

    if (!allAnswered || !allStatementsPlaced) {
      setModalType("incomplete");
      setIsResultOpen(true);
      return;
    }

    setModalType("result");
    setShowFeedback(true);
    setShowDragFeedback(true);
    setIsResultOpen(true);
    setIsLocked(true);

    const totalCorrect = quizCorrectCount + dragCorrectCount;
    const totalItems = preguntas.length + dragStatements.length;
    const combinedGrade = 1 + (4 * totalCorrect) / totalItems;

    localStorage.setItem(
      storageKey,
      JSON.stringify({
        selectedAnswers,
        dragState,
        totalCorrect,
        totalItems,
        grade: Number(combinedGrade.toFixed(1)),
      }),
    );
    window.dispatchEvent(new Event("progress-updated"));
  };

  const handleCloseResult = () => {
    setIsResultOpen(false);
    if (!isLocked) {
      setShowFeedback(false);
      setShowDragFeedback(false);
    }
  };

  const handleDragStart = (event, itemId) => {
    if (showDragFeedback || isLocked) return;
    event.dataTransfer.setData("text/plain", itemId);
    event.dataTransfer.effectAllowed = "move";
  };

  const handleDrop = (event, target) => {
    event.preventDefault();
    if (showDragFeedback || isLocked) return;

    const itemId = event.dataTransfer.getData("text/plain");
    if (!itemId) return;

    setDragState((prev) => {
      if (prev[target].includes(itemId)) return prev;

      const nextState = {
        correcto: prev.correcto.filter((id) => id !== itemId),
        incorrecto: prev.incorrecto.filter((id) => id !== itemId),
        pool: prev.pool.filter((id) => id !== itemId),
      };

      nextState[target] = [...nextState[target], itemId];
      return nextState;
    });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const getDragItemClass = (itemId, container) => {
    if (!showDragFeedback) return "";
    const statement = dragStatements.find((item) => item.id === itemId);
    if (!statement) return "";
    const shouldBeCorrect = statement.correcta;
    const isCorrectContainer =
      (shouldBeCorrect && container === "correcto") ||
      (!shouldBeCorrect && container === "incorrecto");
    return isCorrectContainer ? "drag-item--correct" : "drag-item--incorrect";
  };

  const dragCorrectCount = dragStatements.filter((statement) => {
    const target = statement.correcta ? "correcto" : "incorrecto";
    return dragState[target].includes(statement.id);
  }).length;

  const quizCorrectCount = preguntas.reduce((count, pregunta) => {
    const selectedOptionId = selectedAnswers[pregunta.id];
    const selectedOption = pregunta.opciones.find(
      (opcion) => opcion.id === selectedOptionId,
    );

    return selectedOption?.correcto ? count + 1 : count;
  }, 0);

  const totalCorrect = quizCorrectCount + dragCorrectCount;
  const totalItems = preguntas.length + dragStatements.length;
  const grade = 1 + (4 * totalCorrect) / totalItems;

  const getOptionClass = (preguntaId, opcion) => {
    if (!showFeedback) return "";

    const isSelected = selectedAnswers[preguntaId] === opcion.id;
    const isCorrect = opcion.correcto;

    if (isCorrect) return "correct";
    if (isSelected && !isCorrect) return "incorrect";
    return "";
  };

  return (
    <div className="page-comprueba-bucle-while page-container page-container--with-padding">
      <h2 className="page-comprueba-bucle-while__title page-title">
        Comprueba tu aprendizaje y revisa tu progreso
      </h2>

      <p className="page-comprueba-bucle-while__enunciado page-description">
        Realiza las siguientes actividades: primero completa la actividad de
        arrastrar y soltar. Luego, responde las 6 preguntas del cuestionario
        junto al diseño de una actividad en Scratch.
      </p>

      <blockquote className="page-comprueba-bucle-while__quote quote">
        "Lo que oigo, lo olvido; lo que veo, lo recuerdo; lo que hago, lo
        aprendo."
        <cite>— Confucio</cite>
      </blockquote>

      <div className="page-comprueba-bucle-while__actividad media-container">
        <div className="drag-game">
          <p className="drag-game__intro">
            Arrastra cada enunciado hacia la columna correcta y luego valida tus
            respuestas.
          </p>

          <div className="drag-game__columns">
            <div
              className="drag-game__column"
              onDrop={(event) => handleDrop(event, "correcto")}
              onDragOver={handleDragOver}
            >
              <h4 className="drag-game__column-title">Correcto</h4>
              <div className="drag-game__items">
                {dragState.correcto.length === 0 && (
                  <p className="drag-game__placeholder">
                    Suelta aquí los enunciados correctos.
                  </p>
                )}
                {dragState.correcto.map((itemId) => {
                  const statement = dragStatements.find(
                    (item) => item.id === itemId,
                  );
                  return (
                    <div
                      key={itemId}
                      className={`drag-item ${getDragItemClass(
                        itemId,
                        "correcto",
                      )}`}
                      draggable={!showDragFeedback}
                      onDragStart={(event) => handleDragStart(event, itemId)}
                    >
                      {statement?.texto}
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className="drag-game__column"
              onDrop={(event) => handleDrop(event, "incorrecto")}
              onDragOver={handleDragOver}
            >
              <h4 className="drag-game__column-title">Incorrecto</h4>
              <div className="drag-game__items">
                {dragState.incorrecto.length === 0 && (
                  <p className="drag-game__placeholder">
                    Suelta aquí los enunciados incorrectos.
                  </p>
                )}
                {dragState.incorrecto.map((itemId) => {
                  const statement = dragStatements.find(
                    (item) => item.id === itemId,
                  );
                  return (
                    <div
                      key={itemId}
                      className={`drag-item ${getDragItemClass(
                        itemId,
                        "incorrecto",
                      )}`}
                      draggable={!showDragFeedback}
                      onDragStart={(event) => handleDragStart(event, itemId)}
                    >
                      {statement?.texto}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className="drag-game__pool"
            onDrop={(event) => handleDrop(event, "pool")}
            onDragOver={handleDragOver}
          >
            <h4 className="drag-game__pool-title">Enunciados</h4>
            <div className="drag-game__items drag-game__items--pool">
              {dragState.pool.length === 0 && (
                <p className="drag-game__placeholder">
                  No quedan enunciados por ubicar.
                </p>
              )}
              {dragState.pool.map((itemId) => {
                const statement = dragStatements.find(
                  (item) => item.id === itemId,
                );
                return (
                  <div
                    key={itemId}
                    className="drag-item"
                    draggable={!showDragFeedback}
                    onDragStart={(event) => handleDragStart(event, itemId)}
                  >
                    {statement?.texto}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <h3 className="page-comprueba-bucle-while__subtitle page-subtitle">
        Cuestionario
      </h3>

      <div className="page-comprueba-bucle-while__preguntas card-list">
        {preguntas.map((pregunta) => (
          <div
            key={pregunta.id}
            className="page-comprueba-bucle-while__pregunta card"
          >
            <p className="page-comprueba-bucle-while__pregunta-texto">
              {pregunta.id}. {pregunta.pregunta}
            </p>

            <div className="page-comprueba-bucle-while__opciones options">
              {pregunta.opciones.map((opcion) => (
                <label
                  key={opcion.id}
                  className={`page-comprueba-bucle-while__opcion option ${getOptionClass(
                    pregunta.id,
                    opcion,
                  )}`}
                >
                  <input
                    type="radio"
                    name={`pregunta-${pregunta.id}`}
                    checked={selectedAnswers[pregunta.id] === opcion.id}
                    onChange={() => handleAnswerSelect(pregunta.id, opcion.id)}
                    disabled={showFeedback || isLocked}
                    className="page-comprueba-bucle-while__radio"
                  />
                  <span className="page-comprueba-bucle-while__opcion-texto option__text">
                    {opcion.texto}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleShowFeedback}
        className="page-comprueba-bucle-while__submit-btn btn-standard"
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
            <p>
              Debes completar el cuestionario y ubicar todos los enunciados
              antes de ver el resultado.
            </p>
          ) : (
            <>
              <p>
                Has obtenido {totalCorrect}{" "}
                {totalCorrect === 1
                  ? "respuesta correcta"
                  : "respuestas correctas"}{" "}
                de {totalItems}.
              </p>
              <p>Nota: {grade.toFixed(1)}/5.0</p>
            </>
          )}
        </div>
      </Popup>

      <h3 className="page-comprueba-bucle-while__subtitle page-subtitle">
        Practica diseñando en Scratch
      </h3>

      <div className="page-comprueba-bucle-while__enunciados card-list">
        {enunciados.map((enunciado, index) => (
          <div
            key={index}
            className="page-comprueba-bucle-while__enunciado card"
          >
            <h3 className="page-comprueba-bucle-while__enunciado-titulo">
              Enunciado {index + 1}:
            </h3>
            <p className="page-comprueba-bucle-while__enunciado-texto">
              {enunciado}
            </p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
