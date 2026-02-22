import { useEffect } from "react";

export default function ArCam() {
  useEffect(() => {}, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <a-scene
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false; sourceWidth: 640; sourceHeight: 480; displayWidth: 640; displayHeight: 480;"
        light="defaultLightsEnabled: false"
      >
        <a-light type="ambient" intensity="4"></a-light>

        <a-light type="directional" position="0 2 2" intensity="4"></a-light>

        <a-marker type="pattern" url="/markers/pattern-marker-a.patt">
          <a-entity
            gltf-model="/models/scratch-a.glb"
            scale="4 0.5 2"
          ></a-entity>
        </a-marker>

        <a-marker type="pattern" url="/markers/pattern-marker-b.patt">
          <a-entity
            gltf-model="/models/scratch-b.glb"
            scale="4 0.5 2"
          ></a-entity>
        </a-marker>

        <a-marker type="pattern" url="/markers/pattern-marker-c.patt">
          <a-entity
            gltf-model="/models/scratch-c.glb"
            scale="4 0.5 2"
          ></a-entity>
        </a-marker>

        <a-marker type="pattern" url="/markers/pattern-marker-d.patt">
          <a-entity
            gltf-model="/models/scratch-d.glb"
            scale="4 0.5 2"
          ></a-entity>
        </a-marker>

        <a-marker type="pattern" url="/markers/pattern-marker-e.patt">
          <a-entity
            gltf-model="/models/scratch-e.glb"
            scale="4 0.5 2"
          ></a-entity>
        </a-marker>

        <a-marker type="pattern" url="/markers/pattern-marker-f.patt">
          <a-entity
            gltf-model="/models/scratch-f.glb"
            scale="4 0.5 2"
          ></a-entity>
        </a-marker>

        <a-marker type="pattern" url="/markers/pattern-marker-g.patt">
          <a-entity
            gltf-model="/models/scratch-g.glb"
            scale="4 0.5 2"
          ></a-entity>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}
