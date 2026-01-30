import { useState } from "react";
import "../styles/ChooseLoopGame.css";

const LOOP_QUESTIONS = [
  {
    id: 1,
    enunciado:
      "Necesitas repetir un bloque de código exactamente 10 veces. Ya sabes desde el inicio cuántas repeticiones serán.",
    correcta: "for",
    explicacion:
      "Usamos for cuando conocemos de antemano el número de repeticiones, controlando un contador.",
  },
  {
    id: 2,
    enunciado:
      "Quieres seguir pidiéndole un número al usuario mientras no escriba 0. No sabes cuántas veces se va a repetir.",
    correcta: "while",
    explicacion:
      "while repite mientras una condición sea verdadera y no tiene un número fijo de vueltas.",
  },
  {
    id: 3,
    enunciado:
      "Necesitas mostrar un menú al menos una vez, y luego seguir mostrándolo solo si el usuario elige continuar.",
    correcta: "do-while",
    explicacion:
      "do-while ejecuta el bloque al menos una vez y después evalúa la condición para seguir.",
  },
  {
    id: 4,
    enunciado:
      "Quieres recorrer una lista de 5 nombres y mostrar cada uno por pantalla.",
    correcta: "for",
    explicacion:
      "Recorrer una lista con un tamaño conocido encaja muy bien con un bucle for.",
  },
];

export default function ChooseLoopGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);

  const currentQuestion = LOOP_QUESTIONS[currentIndex];
  const options = ["for", "while", "do-while"];
  const isLastQuestion = currentIndex === LOOP_QUESTIONS.length - 1;

  const handleSelect = (option) => {
    if (selectedOption) return;

    setSelectedOption(option);
    const correct = option === currentQuestion.correcta;
    setIsCorrect(correct);
    if (correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setCurrentIndex(0);
      setSelectedOption(null);
      setIsCorrect(null);
      setScore(0);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  const getOptionClassName = (option) => {
    const classes = ["choose-loop-option"];

    if (!selectedOption) {
      return classes.join(" ");
    }

    const isSelected = selectedOption === option;

    classes.push("answered");

    if (option === currentQuestion.correcta) {
      classes.push("correct");
      if (isSelected) {
        classes.push("selected");
      }
    }

    if (isSelected && option !== currentQuestion.correcta) {
      classes.push("incorrect", "selected");
    }

    if (!isSelected && option !== currentQuestion.correcta) {
      classes.push("dimmed");
    }

    return classes.join(" ");
  };

  return (
    <div className="choose-loop-game">
      <span className="choose-loop-question">{currentQuestion.enunciado}</span>
      <div className="choose-loop-options">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={getOptionClassName(option)}
            onClick={() => handleSelect(option)}
          >
            <span>{option}</span>
          </button>
        ))}
      </div>
      <p className="choose-loop-feedback">
        <span>
          {!selectedOption &&
            "Lee el enunciado y elige el tipo de bucle que usarías."}
          {selectedOption &&
            isCorrect &&
            `¡Correcto! ${currentQuestion.explicacion}`}
          {selectedOption &&
            !isCorrect &&
            `Casi... La respuesta correcta es "${currentQuestion.correcta}". ${currentQuestion.explicacion}`}
        </span>
        {selectedOption && (
          <strong>
            Pregunta {currentIndex + 1} de {LOOP_QUESTIONS.length} · Aciertos:{" "}
            {score}
          </strong>
        )}
      </p>
      {selectedOption && (
        <button
          type="button"
          className="choose-loop-next-btn"
          onClick={handleNext}
        >
          {isLastQuestion ? "Reiniciar actividad" : "Siguiente pregunta"}
        </button>
      )}
    </div>
  );
}
