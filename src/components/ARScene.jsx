import { useEffect, useRef, useState } from "react";
import "@ar-js-org/ar.js";

import markerPatternUrl from "../assets/img/pattern-concept-1.patt?url";
import modelUrl from "../assets/models/model-1.glb?url";

export default function ARScene() {
  const [isArStarted, setIsArStarted] = useState(false);
  const arWrapperRef = useRef(null);

  useEffect(() => {
    if (!isArStarted) {
      return;
    }

    const enforceArInSection = () => {
      const wrapper = arWrapperRef.current;
      if (!wrapper) {
        return;
      }

      const scene = wrapper.querySelector("a-scene");
      if (scene) {
        scene.style.position = "relative";
        scene.style.width = "100%";
        scene.style.height = "24rem";
      }

      const canvas = wrapper.querySelector("canvas.a-canvas");
      if (canvas) {
        canvas.style.position = "absolute";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
      }

      const arVideo = document.querySelector("video.arjs-video");
      if (arVideo) {
        if (arVideo.parentElement !== wrapper) {
          wrapper.appendChild(arVideo);
        }
        arVideo.style.position = "absolute";
        arVideo.style.top = "0";
        arVideo.style.left = "0";
        arVideo.style.width = "100%";
        arVideo.style.height = "100%";
        arVideo.style.objectFit = "cover";
      }
    };

    const intervalId = window.setInterval(enforceArInSection, 250);
    enforceArInSection();

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isArStarted]);

  return (
    <div className="page-inicio__ar-wrapper" ref={arWrapperRef}>
      {!isArStarted ? (
        <div className="page-inicio__ar-start">
          <button
            onClick={() => setIsArStarted(true)}
            className="btn-standard"
            type="button"
          >
            Haz click para abrir el modelo en tu cámara
          </button>
        </div>
      ) : (
        <a-scene
          embedded
          arjs="sourceType: webcam; debugUIEnabled: false;"
          vr-mode-ui="enabled: false"
          renderer="logarithmicDepthBuffer: true;"
        >
          <a-marker type="pattern" url={markerPatternUrl}>
            <a-entity
              gltf-model={modelUrl}
              scale="0.5 0.5 0.5"
              position="0 0 0"
              rotation="0 180 0"
            />
          </a-marker>

          <a-entity camera />
        </a-scene>
      )}
    </div>
  );
}
