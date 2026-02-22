import { useEffect } from "react";

export default function ArCam() {
  useEffect(() => {}, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: true;">
        {/* 🟥 MARCADOR POR DEFECTO (HIRO) */}
        <a-marker preset="hiro">
          {/* 🧱 TU MODELO 3D PERSONALIZADO */}
          <a-entity gltf-model="https://cdn.jsdelivr.net/gh/AR-js-org/AR.js/three.js/examples/marker-training/examples/pattern-files/dinosaur.glb"></a-entity>
        </a-marker>

        {/* 📷 Cámara */}
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}
