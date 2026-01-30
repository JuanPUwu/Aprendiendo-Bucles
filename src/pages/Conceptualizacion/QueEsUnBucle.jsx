// React
import { useState } from "react";

// Components
import CardExample from "../../components/CardExample.jsx";
import SoupLetter from "../../components/SoupLetter.jsx";
import CardExaPseudo from "../../components/CardExaPseudo.jsx";
import Footer from "../../components/Footer.jsx";

// Libraries
import { motion, AnimatePresence } from "framer-motion";

// Data
import { sabiasQue, teHazPreguntado, buclesData } from "./bucleData";
import { exampleData } from "./exampleData";

// Styles
import "../../styles/QueEsUnBucle.css";

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
    <div className="page-que-es-un-bucle">
      <h2 className="page-que-es-un-bucle__title">¿Qué es un bucle?</h2>

      <div className="page-que-es-un-bucle__options">
        <button
          onClick={() => SelectOption(OPTIONS.SABIAS_QUE)}
          className={`page-que-es-un-bucle__option-btn ${selectedOption === OPTIONS.SABIAS_QUE ? "selected" : ""}`}
        >
          <span>¿Sabías que?...</span>
        </button>

        <button
          onClick={() => SelectOption(OPTIONS.TE_HAS_PREGUNTADO)}
          className={`page-que-es-un-bucle__option-btn ${selectedOption === OPTIONS.TE_HAS_PREGUNTADO ? "selected" : ""}`}
        >
          <span>¿Te has preguntado?...</span>
        </button>
      </div>

      <div className="page-que-es-un-bucle__selected-content">
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

      <h3 className="page-que-es-un-bucle__subtitle">
        Tipos de bucles en programación con ejemplos
        <br />
        en pseudocódigo de Scratch.
      </h3>

      <div className="page-que-es-un-bucle__examples">
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
      <h3 className="page-que-es-un-bucle__subtitle--large">
        Completa la sopa de letras y al final descubrirás qué
        <br />
        es un bucle en programación según las palabras encontradas
      </h3>
      <SoupLetter />
      <p className="page-que-es-un-bucle__info-box">
        Cuando creamos <strong>videojuegos</strong>, usamos{" "}
        <strong>instrucciones</strong> para decirle al personaje qué hacer.
        Estas instrucciones forman parte del <strong>código</strong>, que sigue
        una <strong>lógica</strong> clara y ordenada. A veces, queremos que se
        realice una <strong>repetición</strong> muchas veces, como saltar o
        moverse, y para eso usamos bucles: el <strong>bucle for</strong> y el{" "}
        <strong>bucle while</strong> nos ayudan a repetir acciones. Cada acción
        ocurre dentro de un <strong>bloque</strong>, que puede tener una{" "}
        <strong>condición:</strong> algo que debe cumplirse para que el{" "}
        <strong>proceso</strong> continúe. Así, paso a paso, el videojuego cobra
        vida gracias a la <strong>repetición</strong>, la{" "}
        <strong>lógica</strong> y el poder de la programación.
      </p>
      <h3 className="page-que-es-un-bucle__review-title">
        Hagamos un repaso rápido
      </h3>
      {exampleData.map((example, index) => (
        <CardExaPseudo
          key={index}
          explain={example.explain}
          title={example.title}
          img={example.img}
          example={example.example}
          code={example.code}
        />
      ))}

      <Footer />
    </div>
  );
}
