import React, {
  useRef,
  useState
} from "react";
import {
  Canvas,
  useFrame
} from "@react-three/fiber";
import {
  Sky,
  OrbitControls
} from "@react-three/drei";
import './App.css';


function Box(props) {
  const mesh = useRef(null);

  const [state, setState] = useState({
    isHovered: false
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.position.y = mesh.current.position.y + Math.sin(time * 2) / 100;
    mesh.current.rotation.y = mesh.current.rotation.x += 0.01;
  })

  return (

    <
    mesh ref = {
      mesh
    } {
      ...props
    }
    scale = {
      state.isHovered ? [1.5, 1.5, 1.5] : [1, 1, 1]
    }
    onPointerOver = {
      (e) => setState({
        isHovered: true
      })
    }
    onPointerOut = {
      (_) => setState({
        isHovered: false
      })
    } >
    <
    boxBufferGeometry arg = {
      [2, 2, 2]
    }
    /> <
    meshPhongMaterial color = {
      state.isHovered ? "#820263" : "#D90368"
    }
    shininess = {
      100
    }
    /> <
    /mesh>
  );
}


function App() {
  return ( <
    Canvas colorManagement >
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
    pointLight position = {
      [-10, 0, -10]
    }
    intensity = {
      0.5
    }
    />

    <
    Box position = {
      [-1, 0, 0]
    }
    /> <
    Box position = {
      [1, 0, 0]
    }
    />

    <
    mesh rotation = {
      [-Math.PI / 2, 0, 0]
    }
    position = {
      [0, -15, 0]
    } >
    <
    planeBufferGeometry args = {
      [100, 100]
    }
    /> <
    meshStandardMaterial color = "lightblue" / >
    <
    /mesh>

    <
    Sky distance = {
      45000
    }
    sunPosition = {
      [0, 1, 0]
    }
    inclination = {
      0
    }
    azimuth = {
      0.25
    }
    /> <
    OrbitControls / >
    <
    /Canvas>
  );

}

export default App;