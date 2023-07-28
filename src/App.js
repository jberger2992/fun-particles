import React, { useCallback, useState } from "react";
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Menu from "./Menu";
import "./App.css";

function App() {

  const [menu, setMenu] = useState(0);
  const [size, setSize] = useState(3); // 3-6-10
  const [speed, setSpeed] = useState(1); // .5-1-4
  const [quantity, setQuantity] = useState(100); // 50-100-300
  const [color, setColor] = useState("#ffffff"); // "#ffffff"-
  const [shape, setShape] = useState("circle"); // "circle"-"star"
  const [mode, setMode] = useState('repulse'); // "repulse"-"attract"

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);


  const activeMenu = () => {
      if (menu === 1) {
          return <Menu 
            size={size} setSize={setSize}
            speed={speed} setSpeed={setSpeed}
            quantity={quantity} setQuantity={setQuantity}
            color={color} setColor={setColor}
            shape={shape} setShape={setShape}
            mode={mode} setMode={setMode}
          />;
      }
  };

  const handleMenu = () => {
    if (menu === 1) {
      setMenu(0)
    } else if (menu === 0) {
      setMenu(1)
    }
  }

  return (
  <>
    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          background: {
            color: '#000000',
          },
          particles: {
            number: {
              value: quantity,
            },
            color: {
              value: color,
            },
            shape: {
              type: shape,
            },
            opacity: {
              value: 0.5,
              random: true,
            },
            size: {
              value: size,
              random: true,
            },
            move: {
              enable: true,
              speed: speed,
              direction: 'none',
              out_mode: 'out',
              bounce: false,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: mode,
              },
            },
          },
        }}
      />
    <main className="container">
    <button onClick={handleMenu}>Menu</button>
    {activeMenu()} 
    </main>
  </>
  );
}

export default App;
