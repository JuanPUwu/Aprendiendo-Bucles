import { useEffect } from "react";

export default function ArCam() {
  useEffect(() => {}, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <a-scene
        embedded
        arjs="sourceType: webcam; debugUIEnabled: true;"
        light="defaultLightsEnabled: false"
      >
        <a-light type="ambient" intensity="2"></a-light>

        <a-light type="directional" position="0 2 2" intensity="1.8"></a-light>

        <a-marker preset="hiro">
          <a-entity gltf-model="/models/scratch2.glb" scale="2 2 2"></a-entity>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}
