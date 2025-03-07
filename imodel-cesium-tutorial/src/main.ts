import { Ion, Viewer } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "./style.css";

const ionToken = import.meta.env.VITE_ION_TOKEN;

if (!ionToken) {
  throw new Error("Missing required environment variables");
}

// Initialize the Cesium Viewer in the HTML element with the cesiumContainer ID
function setupViewer(): Viewer {
  Ion.defaultAccessToken = ionToken;
  const viewer = new Viewer("cesiumContainer");
  viewer.scene.globe.show = true;
  viewer.scene.debugShowFramesPerSecond = true;
  return viewer;
}

async function main() {
  const viewer = setupViewer();
}

void main();
