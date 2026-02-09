// React
import { useEffect, useState } from "react";

// Libraries
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

// Components
import Footer from "../components/Footer.jsx";

// Styles
import "../styles/common.css";
import "../styles/settingsModal.css";

// Img
import img1 from "../assets/img/actividadFinal-img1.png"; // Correcta
import img2 from "../assets/img/actividadFinal-img2.png"; // Incorrecta
import img3 from "../assets/img/actividadFinal-img3.png"; // Correcta
import img4 from "../assets/img/actividadFinal-img4.png"; // Incorrecta
import img5 from "../assets/img/actividadFinal-img5.png"; // Correcta
import img6 from "../assets/img/actividadFinal-img6.png"; // Incorrecta

export default function ActividadRecreativa() {
  const storageKey = "actividadRecreativaResult";
  const [selectedAnswers, setSelectedAnswers] = useState({
    pregunta1: null,
    pregunta2: null,
    pregunta3: null,
    pregunta4: null,
    pregunta5: null,
    pregunta6: null,
    pregunta7: null,
    pregunta8: null,
    pregunta9: null,
    pregunta10: null,
  });
  const [showFeedback, setShowFeedback] = useState(false);
  const [showDragFeedback, setShowDragFeedback] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [modalType, setModalType] = useState("result");
  const [isLocked, setIsLocked] = useState(false);

  const dragStatements = [
    {
      id: "i1",
      imagen: img1,
      alt: "Lámina correcta 1",
      correcta: true,
    },
    {
      id: "i2",
      imagen: img2,
      alt: "Lámina incorrecta 1",
      correcta: false,
    },
    {
      id: "i3",
      imagen: img3,
      alt: "Lámina correcta 2",
      correcta: true,
    },
    {
      id: "i4",
      imagen: img4,
      alt: "Lámina incorrecta 2",
      correcta: false,
    },
    {
      id: "i5",
      imagen: img5,
      alt: "Lámina correcta 3",
      correcta: true,
    },
    {
      id: "i6",
      imagen: img6,
      alt: "Lámina incorrecta 3",
      correcta: false,
    },
  ];

  const createInitialDragState = () => {
    const shuffledPool = [...dragStatements]
      .sort(() => Math.random() - 0.5)
      .map((item) => item.id);

    return {
      correcto: [],
      incorrecto: [],
      pool: shuffledPool,
    };
  };

  const [dragState, setDragState] = useState(createInitialDragState);

  const preguntas = [
    {
      id: "pregunta1",
      pregunta: "¿Qué es un bucle en programación?",
      opciones: [
        {
          id: "a",
          texto: "Una instrucción que se ejecuta una sola vez",
          correcto: false,
        },
        { id: "b", texto: "Un error en el código", correcto: false },
        {
          id: "c",
          texto: "Una estructura que repite acciones",
          correcto: true,
        },
        { id: "d", texto: "Un tipo de variable", correcto: false },
      ],
    },
    {
      id: "pregunta2",
      pregunta: "¿Cuál es la característica principal del bucle for?",
      opciones: [
        {
          id: "a",
          texto: "Repite acciones un número determinado de veces",
          correcto: true,
        },
        {
          id: "b",
          texto: "Ejecuta acciones solo si ocurre un evento",
          correcto: false,
        },
        {
          id: "c",
          texto: "Detiene el programa inmediatamente",
          correcto: false,
        },
        {
          id: "d",
          texto: "Repite acciones mientras una condición sea verdadera",
          correcto: false,
        },
      ],
    },
    {
      id: "pregunta3",
      pregunta: "¿Cuál es la característica principal de un bucle while?",
      opciones: [
        {
          id: "a",
          texto: "Repite acciones un número de veces",
          correcto: false,
        },
        { id: "b", texto: "Ejecuta acciones solo una vez", correcto: false },
        {
          id: "c",
          texto: "Repite acciones mientras una condición sea verdadera",
          correcto: true,
        },
        { id: "d", texto: "Sirve para recorrer listas", correcto: false },
      ],
    },
    {
      id: "pregunta4",
      pregunta:
        "¿Qué ocurre cuando la condición del bucle while deja de cumplirse?",
      opciones: [
        { id: "a", texto: "El bucle se detiene", correcto: true },
        { id: "b", texto: "El programa se reinicia", correcto: false },
        { id: "c", texto: "El personaje desaparece", correcto: false },
        { id: "d", texto: "El bucle sigue infinitamente", correcto: false },
      ],
    },
    {
      id: "pregunta5",
      pregunta: "¿Cuál de estas opciones describe mejor al bucle for?",
      opciones: [
        {
          id: "a",
          texto: "Repite acciones mientras una condición sea verdadera",
          correcto: false,
        },
        {
          id: "b",
          texto: "Repite acciones hasta que ocurra un evento",
          correcto: false,
        },
        {
          id: "c",
          texto: "Repite acciones un número exacto de veces",
          correcto: true,
        },
        { id: "d", texto: "Detiene el programa", correcto: false },
      ],
    },
    {
      id: "pregunta6",
      pregunta: "¿Qué ventaja tiene usar bloques en programación?",
      opciones: [
        { id: "a", texto: "Sirven solo para juegos", correcto: false },
        { id: "b", texto: "Evitan que el programa funcione", correcto: false },
        { id: "c", texto: "Permiten escribir menos código", correcto: true },
        { id: "d", texto: "Hacen el programa más lento", correcto: false },
      ],
    },
    {
      id: "pregunta7",
      pregunta: "¿Cuál es un ejemplo de condición en un bucle while?",
      opciones: [
        {
          id: "a",
          texto: "Mientras la tecla espacio esté presionada",
          correcto: true,
        },
        { id: "b", texto: "Repetir 10 veces", correcto: false },
        { id: "c", texto: "Al hacer clic en el personaje", correcto: false },
        { id: "d", texto: "Al presionar la bandera verde", correcto: false },
      ],
    },
    {
      id: "pregunta8",
      pregunta:
        "¿Qué ocurre si la condición de un bucle while siempre es verdadera?",
      opciones: [
        { id: "a", texto: "El bucle nunca se ejecuta", correcto: false },
        { id: "b", texto: "El bucle se ejecuta infinitamente", correcto: true },
        { id: "c", texto: "El programa se reinicia", correcto: false },
        {
          id: "d",
          texto: "El bucle se detiene automáticamente",
          correcto: false,
        },
      ],
    },
    {
      id: "pregunta9",
      pregunta: "¿Cuál es la diferencia entre el bucle for y el bucle while?",
      opciones: [
        {
          id: "a",
          texto:
            "El for repite un número fijo de veces, el while depende de una condición",
          correcto: true,
        },
        {
          id: "b",
          texto: "El for depende de una condición y el while no",
          correcto: false,
        },
        {
          id: "c",
          texto: "El while recorre listas y el for no",
          correcto: false,
        },
        { id: "d", texto: "No existe diferencia", correcto: false },
      ],
    },
    {
      id: "pregunta10",
      pregunta: "¿Qué representan los bucles en el pensamiento computacional?",
      opciones: [
        { id: "a", texto: "Evitar condiciones", correcto: false },
        { id: "b", texto: "Detener programas", correcto: false },
        { id: "c", texto: "Crear errores", correcto: false },
        {
          id: "d",
          texto: "Repetir procesos de forma eficiente",
          correcto: true,
        },
      ],
    },
  ];

  const enunciados = [
    'Representa en láminas la secuencia de acciones de un grupo de animales en el zoológico: el primer animal cambia de color, el segundo salta cada vez que su amigo cambia de color, y el último come 10 manzanas, contando en voz alta cada una con la frase "Me comí # manzana". Organiza las láminas en orden para mostrar cómo se repiten las acciones y cómo interactúan los animales.',
    'Programa en Scratch la interacción de tres animales en el zoológico: el primero cambia de color, el segundo salta cada vez que detecta el cambio de color de su amigo, y el último come 10 manzanas, mostrando un mensaje que diga "Me comí # manzana" en cada repetición. Utiliza bucles y condiciones para que las acciones se ejecuten de manera automática y coordinada.',
  ];

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

  const handleAnswerSelect = (preguntaId, opcionId) => {
    if (showFeedback || isLocked) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [preguntaId]: opcionId,
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

    const allImagesPlaced = dragState.pool.length === 0;

    if (!allAnswered || !allImagesPlaced) {
      setModalType("incomplete");
      setIsResultOpen(true);
      return;
    }

    setModalType("result");
    setShowFeedback(true);
    setShowDragFeedback(true);
    setIsResultOpen(true);
    setIsLocked(true);

    localStorage.setItem(
      storageKey,
      JSON.stringify({
        selectedAnswers,
        dragState,
        totalCorrect,
        totalItems,
        grade: Number(grade.toFixed(1)),
      }),
    );
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

  const correctCount = preguntas.reduce((count, pregunta) => {
    const selectedOptionId = selectedAnswers[pregunta.id];
    const selectedOption = pregunta.opciones.find(
      (opcion) => opcion.id === selectedOptionId,
    );

    return selectedOption?.correcto ? count + 1 : count;
  }, 0);

  const totalCorrect = correctCount + dragCorrectCount;
  const totalItems = preguntas.length + dragStatements.length;
  const grade = 1 + (4 * totalCorrect) / totalItems;

  return (
    <div className="page-actividad-recreativa page-container">
      <h2 className="page-actividad-recreativa__title page-title">
        Evaluación final: Descubramos lo aprendido
      </h2>

      <p className="page-actividad-recreativa__enunciado page-description">
        A continuación, realiza la actividad de arrastrar la imagen al recuadro
        correspondiente. Luego, responde las preguntas de opción múltiple y
        concluye creando un zoológico con láminas y en Scratch.
      </p>

      <blockquote className="page-actividad-recreativa__quote quote">
        "La educación es encender una llama, no llenar un recipiente."
        <cite>— Sócrates</cite>
      </blockquote>

      <div className="page-actividad-recreativa__actividad media-container">
        <div className="drag-game">
          <p className="drag-game__intro">
            Arrastra cada imagen hacia la columna correcta y luego valida tus
            respuestas.
          </p>

          <div className="drag-game__columns">
            <div
              className="drag-game__column"
              onDrop={(event) => handleDrop(event, "correcto")}
              onDragOver={handleDragOver}
            >
              <h4 className="drag-game__column-title">Correcto</h4>
              <div className="drag-game__items drag-game__items--images">
                {dragState.correcto.length === 0 && (
                  <p className="drag-game__placeholder">
                    Suelta aquí las imágenes correctas.
                  </p>
                )}
                {dragState.correcto.map((itemId) => {
                  const statement = dragStatements.find(
                    (item) => item.id === itemId,
                  );
                  return (
                    <div
                      key={itemId}
                      className={`drag-item drag-item--image ${getDragItemClass(
                        itemId,
                        "correcto",
                      )}`}
                      draggable={!showDragFeedback}
                      onDragStart={(event) => handleDragStart(event, itemId)}
                    >
                      <img
                        src={statement?.imagen}
                        alt={statement?.alt}
                        className="drag-item__image"
                      />
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
              <div className="drag-game__items drag-game__items--images">
                {dragState.incorrecto.length === 0 && (
                  <p className="drag-game__placeholder">
                    Suelta aquí las imágenes incorrectas.
                  </p>
                )}
                {dragState.incorrecto.map((itemId) => {
                  const statement = dragStatements.find(
                    (item) => item.id === itemId,
                  );
                  return (
                    <div
                      key={itemId}
                      className={`drag-item drag-item--image ${getDragItemClass(
                        itemId,
                        "incorrecto",
                      )}`}
                      draggable={!showDragFeedback}
                      onDragStart={(event) => handleDragStart(event, itemId)}
                    >
                      <img
                        src={statement?.imagen}
                        alt={statement?.alt}
                        className="drag-item__image"
                      />
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
            <h4 className="drag-game__pool-title">Imágenes</h4>
            <div className="drag-game__items drag-game__items--pool drag-game__items--images">
              {dragState.pool.length === 0 && (
                <p className="drag-game__placeholder">
                  No quedan imágenes por ubicar.
                </p>
              )}
              {dragState.pool.map((itemId) => {
                const statement = dragStatements.find(
                  (item) => item.id === itemId,
                );
                return (
                  <div
                    key={itemId}
                    className="drag-item drag-item--image"
                    draggable={!showDragFeedback}
                    onDragStart={(event) => handleDragStart(event, itemId)}
                  >
                    <img
                      src={statement?.imagen}
                      alt={statement?.alt}
                      className="drag-item__image"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <h3 className="page-actividad-recreativa__subtitle page-subtitle">
        Cuestionario
      </h3>

      <div className="page-actividad-recreativa__preguntas card-list">
        {preguntas.map((pregunta, index) => (
          <div
            key={pregunta.id}
            className="page-actividad-recreativa__pregunta card"
          >
            <h3 className="page-actividad-recreativa__pregunta-texto">
              {index + 1}. {pregunta.pregunta}
            </h3>

            <div className="page-actividad-recreativa__opciones options">
              {pregunta.opciones.map((opcion) => (
                <label
                  key={opcion.id}
                  className={`page-actividad-recreativa__opcion option ${
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
                    onChange={() => handleAnswerSelect(pregunta.id, opcion.id)}
                    disabled={showFeedback || isLocked}
                  />
                  <span className="page-actividad-recreativa__opcion-texto option__text">
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
        className="page-actividad-recreativa__submit-btn btn-standard"
      >
        {showFeedback || isLocked ? "Ver nota" : "Ver resultados"}
      </button>

      <h3 className="page-actividad-recreativa__subtitle page-subtitle">
        Practica creando tu zoológico
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
              Debes completar el cuestionario y ubicar todas las imágenes antes
              de ver el resultado.
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

      <Footer />
    </div>
  );
}
