import React from "react";
import ColorPalette from "./components/ColorPalette";
import Header from "./components/Header";
import "./App.css";
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <h1>Color Palette Generator</h1>
        <p>Click on the color you like to copy its code!</p>
      </div>
      <ColorPalette />
      <About />
    </>
  );
}

export default App;
