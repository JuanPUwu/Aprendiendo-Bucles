import { useEffect, useRef, useState } from "react";
import "@ar-js-org/ar.js";

import markerPatternUrl from "../assets/img/pattern-concept-1.patt?url";
import modelUrl from "../assets/models/model-1.glb?url";
import markerPreview from "../assets/img/pattern-concept-1.png";

export default function ARScene() {
  const [isArStarted, setIsArStarted] = useState(false);
  const [isMarkerFound, setIsMarkerFound] = useState(false);
  const markerRef = useRef(null);

  const stopCamera = () => {
    document.querySelectorAll("video.arjs-video").forEach((videoElement) => {
      const stream = videoElement.srcObject;
      if (stream && typeof stream.getTracks === "function") {
        stream.getTracks().forEach((track) => track.stop());
      }
      videoElement.srcObject = null;
      videoElement.remove();
    });

    document.querySelectorAll("canvas.a-canvas").forEach((canvasElement) => {
      canvasElement.remove();
    });
  };

  useEffect(() => {
    if (!isArStarted) {
      return;
    }

    const markerElement = markerRef.current;
    const onMarkerFound = () => setIsMarkerFound(true);
    const onMarkerLost = () => setIsMarkerFound(false);

    if (markerElement) {
      markerElement.addEventListener("markerFound", onMarkerFound);
      markerElement.addEventListener("markerLost", onMarkerLost);
    }

    return () => {
      if (markerElement) {
        markerElement.removeEventListener("markerFound", onMarkerFound);
        markerElement.removeEventListener("markerLost", onMarkerLost);
      }
      stopCamera();
    };
  }, [isArStarted]);

  const handleStartAr = () => {
    setIsArStarted(true);
  };

  const handleStopAr = () => {
    setIsArStarted(false);
    setIsMarkerFound(false);
    stopCamera();
  };

  return (
    <div className="page-inicio__ar-wrapper">
      {!isArStarted ? (
        <div className="page-inicio__ar-start">
          <img
            src={markerPreview}
            alt="Marcador de referencia para realidad aumentada"
            className="page-inicio__ar-marker-preview"
          />
          <p className="page-inicio__ar-help">
            Usa este marcador en otra pantalla o impreso. Luego apunta la cámara
            del teléfono para ver el modelo 3D.
          </p>
          <button
            onClick={handleStartAr}
            className="btn-standard"
            type="button"
          >
            Haz click para abrir el modelo en tu cámara
          </button>
        </div>
      ) : (
        <>
          <button
            onClick={handleStopAr}
            className="page-inicio__ar-stop btn-standard"
            type="button"
          >
            Cerrar cámara
          </button>

          <p className="page-inicio__ar-status">
            {isMarkerFound
              ? "Marcador detectado ✅"
              : "Apunta la cámara al marcador para mostrar el modelo"}
          </p>

          <a-scene
            embedded
            arjs="sourceType: webcam; debugUIEnabled: false; trackingMethod: best;"
            vr-mode-ui="enabled: false"
            renderer="antialias: true; alpha: true; precision: medium;"
          >
            <a-marker ref={markerRef} type="pattern" url={markerPatternUrl}>
              <a-light type="ambient" intensity="1.3" />
              <a-light type="directional" intensity="1" position="1 2 1" />
              <a-entity
                gltf-model={`url(${modelUrl})`}
                scale="1 1 1"
                position="0 0.4 0"
                rotation="0 180 0"
              />
            </a-marker>

            <a-entity camera />
          </a-scene>
        </>
      )}
    </div>
  );
}
