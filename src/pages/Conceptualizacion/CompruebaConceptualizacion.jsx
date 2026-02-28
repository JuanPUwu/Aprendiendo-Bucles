// Styles
import "../../styles/common.css";
import "../../styles/settingsModal.css";

// Components
import Footer from "../../components/Footer.jsx";

// Fondo
import fondo from "../../assets/img/fondo-conceptualizacion.png";

export default function CompruebaConceptualizacion() {
  const enunciados = [
    "Haz que un personaje camine 10 pasos repetidos 5 veces usando un bloque de repetición.",
    'Crea un bucle para que el personaje diga "¡Hola!, ¿Cómo estás?", avance 12 pasos y diga "¡Adiós!" tres veces seguidas.',
  ];

  return (
    <div
      className="page-comprueba-conceptualizacion page-container page-container--with-padding"
      style={{ "--page-bg": `url(${fondo})` }}
    >
      <h2 className="page-comprueba-conceptualizacion__title page-title">
        Comprueba tu aprendizaje y revisa tu progreso
      </h2>

      <p className="page-comprueba-conceptualizacion__description page-description page-description--large">
        En esta etapa, revisa los siguientes enunciados y responde el formulario
        correspondiente para registrar tu avance.
      </p>

      <blockquote className="page-comprueba-conceptualizacion__quote quote">
        "La programación no es sobre lo que sabes, sino sobre lo que puedes
        descubrir." – Chris Pine
      </blockquote>

      <div className="page-comprueba-conceptualizacion__iframe-container">
        <iframe
          title="Formulario de Conceptualización"
          src="https://forms.office.com/r/gqNHt0RnbJ?embed=true"
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Cargando…
        </iframe>
      </div>

      <h3 className="page-comprueba-conceptualizacion__subtitle page-subtitle">
        Practica lo básico
      </h3>

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

      <Footer />
    </div>
  );
}
