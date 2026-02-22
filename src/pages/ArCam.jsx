import { useEffect } from "react";

export default function ArCam() {
  useEffect(() => {}, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <a-scene
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false;"
        light="defaultLightsEnabled: false"
      >
        <a-light type="ambient" intensity="4"></a-light>

        <a-light type="directional" position="0 2 2" intensity="4"></a-light>

        <a-marker type="pattern" url="/markers/pattern-marker-prueba.patt">
          {/* <a-entity
            gltf-model="/models/scratch-a.glb"
            scale="4 0.5 2"
          ></a-entity> */}
          <a-box color="red" scale="0.5 0.5 0.5"></a-box>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}
