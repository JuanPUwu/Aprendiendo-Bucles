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
      <p>
        En esta actividad relacionaste cada palabra con su definición
        correspondiente, emparejándolas correctamente según su significado. Esto
        te permitió reconocer los diferentes tipos de bucles en programación:
        for, while y do-while. ¡Excelente trabajo! Lograste identificar y
        relacionar cada bucle con su concepto como todo un programador en
        entrenamiento. ¡Sigue practicando!
      </p>
      <h6>Nivel 2: Descifra la palabra clave del bucle</h6>
    </div>
  );
}
