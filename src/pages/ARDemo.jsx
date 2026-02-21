import "@ar-js-org/ar.js";
import { useEffect } from "react";
import "../styles/arDemo.css";

export default function ARDemo() {
  useEffect(() => {
    document.body.classList.add("ar-demo-active");

    return () => {
      document.body.classList.remove("ar-demo-active");
    };
  }, []);

  useEffect(() => {
    const applyVideoAttributes = () => {
      const videoElement = document.querySelector("#arjs-video");

      if (!videoElement) return;

      videoElement.setAttribute("autoplay", "true");
      videoElement.setAttribute("muted", "true");
      videoElement.setAttribute("playsinline", "true");
      videoElement.setAttribute("webkit-playsinline", "true");
      videoElement.muted = true;
      videoElement.playsInline = true;
    };

    const intervalId = window.setInterval(applyVideoAttributes, 300);
    const timeoutId = window.setTimeout(() => {
      window.clearInterval(intervalId);
    }, 6000);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="ar-demo">
      <a-scene
        embedded
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
        renderer="antialias: true; alpha: true"
        arjs="sourceType: webcam; debugUIEnabled: false;"
      >
        <a-marker preset="hiro">
          <a-entity
            position="0 0.35 0.25"
            scale="0.05 0.05 0.05"
            gltf-model="https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
          ></a-entity>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}
