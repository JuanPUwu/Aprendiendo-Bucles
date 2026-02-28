// Styles
import "../../styles/common.css";
import "../../styles/settingsModal.css";

// Components
import Footer from "../../components/Footer.jsx";

// Fondo
import fondo from "../../assets/img/fondo-bucleFor.png";

export default function CompruebaBucleFor() {
  const enunciados = [
    "Haz que el personaje avance 10 pasos, gire 15 grados y diga “¡Vamos!” en cada repetición, repitiendo esta secuencia 6 veces con un bloque de repetición.",
    "Haz que el personaje toque un sonido, cambie de disfraz y avance 20 pasos, repitiendo toda la secuencia 5 veces con un bloque de repetición.",
  ];

  return (
    <div
      className="page-comprueba-bucle-for page-container page-container--with-padding"
      style={{ "--page-bg": `url(${fondo})` }}
    >
      <h2 className="page-comprueba-bucle-for__title page-title">
        Comprueba tu aprendizaje y revisa tu progreso
      </h2>

      <p className="page-comprueba-bucle-for__description page-description page-description--large">
        Revisa los siguientes enunciados y completa el formulario
        correspondiente.
      </p>

      <blockquote className="page-comprueba-bucle-for__quote quote">
        “El aprendizaje es experiencia, todo lo demás es información.”– Albert
        Einstein
      </blockquote>

      <div className="page-comprueba-bucle-for__iframe-container">
        <iframe
          title="Formulario Bucle For"
          src="https://forms.office.com/r/j1YbWDbry1?embed=true"
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Cargando…
        </iframe>
      </div>

      <h3 className="page-comprueba-bucle-for__subtitle page-subtitle">
        Practica las repeticiones
      </h3>

      <div className="page-comprueba-bucle-for__enunciados card-list">
        {enunciados.map((enunciado, index) => (
          <div key={index} className="page-comprueba-bucle-for__enunciado card">
            <h3 className="page-comprueba-bucle-for__enunciado-titulo">
              Enunciado {index + 1}:
            </h3>
            <p className="page-comprueba-bucle-for__enunciado-texto">
              {enunciado}
            </p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
