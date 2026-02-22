import { useEffect } from "react";

export default function ArCam() {
  useEffect(() => {}, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: true;">
        {/* 🔴 TU MARCADOR PERSONALIZADO */}
        <a-marker type="pattern" url="/markers/concept1.patt">
          {/* 🧱 TU MODELO 3D */}
          <a-entity
            gltf-model="/models/scratch1.glb"
            scale="0.4 0.4 0.4"
            position="0 0 0"
            rotation="0 180 0"
          ></a-entity>
        </a-marker>

        {/* 📷 Cámara */}
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}
