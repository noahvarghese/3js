import React from "react";
import {
  Canvas
} from "@react-three/fiber";
import './App.css';


function Box(props) {
  return ( <
    mesh >
    <
    boxBufferGeometry arg = {
      [2, 2, 2]
    }
    /> <
    meshPhongMaterial color = "blue"
    shininess = {
      100
    }
    /> <
    /mesh>
  );
}


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
    Box / >
    <
    /Canvas>
  );

}

export default App;