// Components
import MatchColumnsGame from "../../components/MatchColumnsGame.jsx";
import ChooseLoopGame from "../../components/ChooseLoopGame.jsx";

// Styles
import "../../styles/PracticarConceptualizacion.css";

export default function PracticarConceptualizacion() {
  return (
    <div className="page-practicar-conceptualizacion">
      <h2 className="page-practicar-conceptualizacion__title">
        Llegó la hora de practicar
      </h2>
      <p className="page-practicar-conceptualizacion__description">
        Encontrarás 4 niveles de actividades diseñadas para ayudarte a aprender
        <br />y comprender qué es un bucle en programación.
      </p>
      <h6 className="page-practicar-conceptualizacion__level-title">
        Nivel 1: Unamos la palabra con la definición
      </h6>
      <MatchColumnsGame />
      <p className="page-practicar-conceptualizacion__feedback">
        En esta actividad relacionaste cada palabra con su definición
        correspondiente, emparejándolas correctamente según su significado. Esto
        te permitió reconocer los diferentes tipos de bucles en programación:
        for, while y do-while. ¡Excelente trabajo! Lograste identificar y
        relacionar cada bucle con su concepto como todo un programador en
        entrenamiento. ¡Sigue practicando!
      </p>
      <h6 className="page-practicar-conceptualizacion__level-title">
        Nivel 2: Elige el bucle correcto
      </h6>
      <ChooseLoopGame />
    </div>
  );
}
