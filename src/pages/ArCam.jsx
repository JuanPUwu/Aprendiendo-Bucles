import { useEffect, useMemo, useState } from "react";

export default function ArCam() {
  const [ready, setReady] = useState(false);
  const [cameraDeviceId, setCameraDeviceId] = useState("");

  useEffect(() => {
    let mounted = true;

    const pickBestRearCamera = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoInputs = devices.filter((d) => d.kind === "videoinput");
        console.log("[AR] videoinput devices:", videoInputs);

        // Heurística: prioriza cámaras traseras / gran angular
        const ranked = [...videoInputs].sort((a, b) => {
          const score = (label = "") => {
            const l = label.toLowerCase();
            let s = 0;
            if (
              l.includes("back") ||
              l.includes("rear") ||
              l.includes("trasera")
            )
              s += 5;
            if (l.includes("wide") || l.includes("ultra") || l.includes("main"))
              s += 3;
            if (l.includes("tele")) s -= 3;
            return s;
          };
          return score(b.label) - score(a.label);
        });

        return ranked[0]?.deviceId || "";
      } catch (e) {
        console.warn("[AR] enumerateDevices failed:", e);
        return "";
      }
    };

    const init = async () => {
      try {
        const preferredDeviceId = await pickBestRearCamera();
        if (!mounted) return;

        if (preferredDeviceId) setCameraDeviceId(preferredDeviceId);

        const primaryConstraints = preferredDeviceId
          ? {
              video: {
                deviceId: { exact: preferredDeviceId },
                width: { ideal: 1280 },
                height: { ideal: 720 },
              },
            }
          : {
              video: {
                facingMode: { ideal: "environment" },
                width: { ideal: 1280 },
                height: { ideal: 720 },
              },
            };

        const stream =
          await navigator.mediaDevices.getUserMedia(primaryConstraints);
        stream.getTracks().forEach((track) => track.stop());

        if (mounted) setReady(true);
      } catch (err) {
        console.warn("[AR] Camera constraint failed, trying fallback...", err);
        try {
          const fallback = await navigator.mediaDevices.getUserMedia({
            video: true,
          });
          fallback.getTracks().forEach((track) => track.stop());
        } catch (fallbackErr) {
          console.warn("[AR] Fallback camera access failed:", fallbackErr);
        } finally {
          if (mounted) setReady(true);
        }
      }
    };

    init();

    return () => {
      mounted = false;
    };
  }, []);

  const arjsConfig = useMemo(() => {
    const base = "sourceType: webcam; debugUIEnabled: false;";
    return cameraDeviceId ? `${base} deviceId: ${cameraDeviceId};` : base;
  }, [cameraDeviceId]);

  if (!ready) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          canvas {
            width: 100vw !important;
            height: 100vh !important;
            object-fit: cover;
          }

          video {
            object-fit: cover !important;
            width: 100vw !important;
            height: 100vh !important;
          }
        `}
      </style>

      <a-scene
        arjs={arjsConfig}
        vr-mode-ui="enabled: false"
        renderer="logarithmicDepthBuffer: true; precision: medium;"
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
