import { useEffect } from "react";

export default function ArCam() {
  useEffect(() => {}, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false;">
        {/* Cámara AR */}
        <a-marker preset="hiro">
          <a-box position="0 0.5 0" material="color: red"></a-box>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}
