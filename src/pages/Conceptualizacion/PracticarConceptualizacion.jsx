import { useEffect, useState } from "react";
import "../../styles/pages.css";

const PRACTICE_DATA = [
  {
    id: 1,
    palabra: "for",
    definicion:
      "Bucle que se usa cuando conocemos de antemano cuántas veces queremos repetir un bloque de código.",
  },
  {
    id: 2,
    palabra: "while",
    definicion:
      "Bucle que repite un bloque de código mientras una condición sea verdadera, sin un número fijo de repeticiones.",
  },
  {
    id: 3,
    palabra: "do-while",
    definicion:
      "Bucle que ejecuta primero el bloque de código y luego verifica la condición, por lo que se ejecuta al menos una vez.",
  },
];

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

function shuffleArray(array) {
  const copy = [...array];
  return copy.sort(() => Math.random() - 0.5);
}

function MatchColumnsGame() {
  const [words, setWords] = useState([]);
  const [definitions, setDefinitions] = useState([]);
  const [selectedAId, setSelectedAId] = useState(null);
  const [selectedBId, setSelectedBId] = useState(null);
  const [matchedIds, setMatchedIds] = useState([]);
  const [errorPair, setErrorPair] = useState(null);

  useEffect(() => {
    const shuffledWords = shuffleArray(PRACTICE_DATA);
    const shuffledDefinitions = shuffleArray(PRACTICE_DATA);

    setWords(shuffledWords);
    setDefinitions(shuffledDefinitions);
    setSelectedAId(null);
    setSelectedBId(null);
    setMatchedIds([]);
    setErrorPair(null);
  }, []);

  useEffect(() => {
    if (selectedAId != null && selectedBId != null) {
      if (selectedAId === selectedBId) {
        setMatchedIds((prev) =>
          prev.includes(selectedAId) ? prev : [...prev, selectedAId],
        );
        setSelectedAId(null);
        setSelectedBId(null);
      } else {
        const currentA = selectedAId;
        const currentB = selectedBId;

        setErrorPair({ aId: currentA, bId: currentB });

        setTimeout(() => {
          setErrorPair((prev) => {
            if (!prev) return null;
            if (prev.aId === currentA && prev.bId === currentB) return null;
            return prev;
          });
        }, 600);

        setSelectedAId(null);
        setSelectedBId(null);
      }
    }
  }, [selectedAId, selectedBId]);

  const handleClick = (id, column) => {
    if (matchedIds.includes(id)) return;

    if (column === "A") {
      setSelectedAId((prev) => (prev === id ? null : id));
    } else {
      setSelectedBId((prev) => (prev === id ? null : id));
    }
  };

  const getItemClassName = (id, column) => {
    const classes = ["match-item"];

    if (matchedIds.includes(id)) {
      classes.push("matched");
    }

    const isSelected = column === "A" ? selectedAId === id : selectedBId === id;
    if (isSelected) {
      classes.push("selected");
    }

    if (
      errorPair &&
      ((column === "A" && errorPair.aId === id) ||
        (column === "B" && errorPair.bId === id))
    ) {
      classes.push("error");
    }

    return classes.join(" ");
  };

  return (
    <div className="match-game">
      <div className="match-columns">
        <div className="match-column">
          <h4 className="match-column-title">Palabra</h4>
          <ul className="match-items">
            {words.map((item) => (
              <li
                key={item.id}
                className={getItemClassName(item.id, "A")}
                onClick={() => handleClick(item.id, "A")}
              >
                {item.palabra}
              </li>
            ))}
          </ul>
        </div>

        <div className="match-column">
          <h4 className="match-column-title">Definición</h4>
          <ul className="match-items">
            {definitions.map((item) => (
              <li
                key={item.id}
                className={getItemClassName(item.id, "B")}
                onClick={() => handleClick(item.id, "B")}
              >
                {item.definicion}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ChooseLoopGame() {
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
    const classes = ["loop-option"];

    if (!selectedOption) {
      return classes.join(" ");
    }

    const isSelected = selectedOption === option;

    classes.push("answered");

    if (option === currentQuestion.correcta) {
      classes.push("correct");
      if (isSelected) {
        classes.push("loop-selected");
      }
    }

    if (isSelected && option !== currentQuestion.correcta) {
      classes.push("incorrect", "loop-selected");
    }

    if (!isSelected && option !== currentQuestion.correcta) {
      classes.push("dimmed");
    }

    return classes.join(" ");
  };

  return (
    <div className="loop-quiz">
      <p className="loop-quiz-question">{currentQuestion.enunciado}</p>
      <div className="cont-options-question loop-options">
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
      <p className="retro-alimentacion">
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
          <span>
            Pregunta {currentIndex + 1} de {LOOP_QUESTIONS.length} · Aciertos:{" "}
            {score}
          </span>
        )}
      </p>
      {selectedOption && (
        <button
          type="button"
          className="next-question-button"
          onClick={handleNext}
        >
          {isLastQuestion ? "Reiniciar actividad" : "Siguiente pregunta"}
        </button>
      )}
    </div>
  );
}

export default function PracticarConceptualizacion() {
  return (
    <div className="page-container">
      <h2>Llegó la hora de practicar</h2>
      <p>
        Encontrarás 4 niveles de actividades diseñadas para ayudarte a aprender
        <br />y comprender qué es un bucle en programación.
      </p>
      <h6>Nivel 1: Unamos la palabra con la definición</h6>
      <MatchColumnsGame />
      <p className="retro-alimentacion">
        En esta actividad relacionaste cada palabra con su definición
        correspondiente, emparejándolas correctamente según su significado. Esto
        te permitió reconocer los diferentes tipos de bucles en programación:
        for, while y do-while. ¡Excelente trabajo! Lograste identificar y
        relacionar cada bucle con su concepto como todo un programador en
        entrenamiento. ¡Sigue practicando!
      </p>
      <h6>Nivel 2: Elige el bucle correcto</h6>
      <ChooseLoopGame />
    </div>
  );
}
