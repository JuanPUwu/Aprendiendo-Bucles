import { useEffect } from "react";

export default function ArCam() {
  useEffect(() => {}, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false;">
        <a-entity light="type: ambient; intensity: 1.2"></a-entity>

        <a-entity
          light="type: directional; intensity: 0.8"
          position="1 2 1"
        ></a-entity>

        <a-marker preset="hiro">
          <a-entity
            gltf-model="/models/scratch1.glb"
            scale="0.5 0.5 0.5"
            position="0 0 0"
          ></a-entity>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}
