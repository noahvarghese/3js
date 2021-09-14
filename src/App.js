import React from "react";
import {
  Canvas
} from "@react-three/fiber";
import './App.css';

function App() {
  return ( <
    Canvas >
    <
    ambientLight intensity = {
      0.3
    }
    /> <
    directionalLight position = {
      [0, 10, 0]
    }
    intensity = {
      1.5
    }
    /> <
    pointLight position = {
      [0, -10, 0]
    }
    intensity = {
      0.5
    }
    /> <
    mesh >
    <
    boxBufferGeometry arg = {
      [2, 2, 2]
    }
    /> <
    meshStandardMaterial color = "blue" / >
    <
    /mesh> <
    /Canvas>
  );

}

export default App;