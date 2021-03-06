import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import './style.css';
import './fonts/open-dyslexic/OpenDyslexic-Bold.otf';
import crab from './ART/crab.png';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const { width } = useWindowDimensions();
  let canvas;
  const canvasRef = useRef(null);
  useEffect(() => {
    canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let canvasScale = width/1280;
    canvas.width = 1280 * canvasScale;
    canvas.height = 720 * canvasScale;
    ctx.fillStyle = 'rgb(15, 15, 15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    console.log(crab);
    var crabImage = new Image();
    crabImage.src = crab;
    crabImage.onload = function(){
    ctx.drawImage(crabImage,0,0,120,78);
    }
  }, []);


  return (
    <div className="App">
        <link rel="stylesheet" type="text/css" href="style.css" />
    <head>
	  </head>
	  <body> 
      <div className="title">
        Krab Kingdom
      </div>
      <canvas ref={canvasRef}/>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="modal.js"></script>
      <div className='center'>
      <div className="buttonsBorder">
        <button className="newGame">Start</button>
        <button className="info">Info</button>
      </div>
      </div>
	  </body>
  </div>
  );
  
}

export default App;
