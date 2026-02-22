import { useEffect } from "react";

export default function ArCam() {
  useEffect(() => {}, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false;">
        <a-entity light="type: ambient; intensity: 3"></a-entity>

        <a-entity
          light="type: directional; intensity: 3"
          position="1 2 1"
        ></a-entity>

        <a-marker preset="hiro">
          <a-entity
            gltf-model="/models/scratch-1.glb"
            scale="2 2 2"
            position="0 0 0"
          ></a-entity>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}
