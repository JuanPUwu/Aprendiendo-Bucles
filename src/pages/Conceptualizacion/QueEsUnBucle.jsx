// React
import { useState } from "react";

// Components
import CardExample from "../../components/CardExample";

// Libraries
import { motion, AnimatePresence } from "framer-motion";

// Data
import { sabiasQue, teHazPreguntado, buclesData } from "./bucleData";

// Styles
import "../../styles/pages.css";

export default function QueEsUnBucle() {
  const [selectedOption, setSelectedOption] = useState(null);

  const OPTIONS = {
    SABIAS_QUE: "sabiasQue",
    TE_HAS_PREGUNTADO: "teHasPreguntado",
  };

  const SelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="page-container">
      <h2>¿Qué es un bucle?</h2>

      <div className="cont-options-question">
        <button
          onClick={() => SelectOption(OPTIONS.SABIAS_QUE)}
          className={selectedOption === OPTIONS.SABIAS_QUE ? "selected" : ""}
        >
          <span>¿Sabías que?...</span>
        </button>

        <button
          onClick={() => SelectOption(OPTIONS.TE_HAS_PREGUNTADO)}
          className={
            selectedOption === OPTIONS.TE_HAS_PREGUNTADO ? "selected" : ""
          }
        >
          <span>¿Te has preguntado?...</span>
        </button>
      </div>

      <div className="cont-option-selected">
        <AnimatePresence mode="wait">
          {selectedOption === OPTIONS.SABIAS_QUE && (
            <motion.div
              key="sabiasQue"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeIn" }}
            >
              {sabiasQue.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </motion.div>
          )}

          {selectedOption === OPTIONS.TE_HAS_PREGUNTADO && (
            <motion.div
              key="teHasPreguntado"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeIn" }}
            >
              {teHazPreguntado.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
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
