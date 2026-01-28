// React
import { useState } from "react";

// Components
import CardExample from "../../components/CardExample";

// Data
import { sabiasQue, teHazPreguntado, buclesData } from "./bucleData";

// Styles
import "../../styles/pages.css";

export default function QueEsUnBucle() {
  const [optionSelected, setOptionSelected] = useState([]);
  const [teHazPreguntadoSelected, setTeHazPreguntadoSelected] = useState(false);
  const [sabiasQueSelected, setSabiasQueSelected] = useState(false);

  const SelectOption = (option) => {
    if (option === sabiasQue) {
      setOptionSelected(sabiasQue);
      setSabiasQueSelected(true);
      setTeHazPreguntadoSelected(false);
    } else if (option === teHazPreguntado) {
      setOptionSelected(teHazPreguntado);
      setTeHazPreguntadoSelected(true);
      setSabiasQueSelected(false);
    }
  };

  return (
    <div className="page-container">
      <h2>¿Qué es un bucle?</h2>

      <div className="cont-options-question">
        <button
          onClick={() => SelectOption(sabiasQue)}
          className={sabiasQueSelected ? "selected" : ""}
        >
          <span>¿Sabías que?...</span>
        </button>
        <button
          onClick={() => SelectOption(teHazPreguntado)}
          className={teHazPreguntadoSelected ? "selected" : ""}
        >
          <span>¿Te haz preguntado?...</span>
        </button>
      </div>

      <div className="cont-option-selected">
        {optionSelected.map((option, index) => (
          <span key={index}>{option}</span>
        ))}
      </div>

      <h3>
        Tipos de bucles en programación con ejemplos en pseudocódigo de Scratch.
      </h3>

      <div className="cont-example">
        {buclesData.map((bucle, index) => (
          <CardExample
            key={index}
            title={bucle.title}
            description={bucle.description}
            code={bucle.code}
            codeDescription={bucle.codeDescription}
          />
        ))}
      </div>
    </div>
  );
}
