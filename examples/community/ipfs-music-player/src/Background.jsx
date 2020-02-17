import React, {useEffect} from 'react'

export default function Background() {
  function setGradient() {
    // set to the size of device
    let canvas = document.getElementById("gradient");
    let ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 6;

    let gradient = ctx.createLinearGradient(0,0,0,canvas.height);
    gradient.addColorStop(0,"rgba(35, 7, 77, 1)");
    gradient.addColorStop(1,"rgba(204, 83, 51, 1)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,canvas.width,canvas.height);
  }


  // Set the background to a gradient when component mounts
  useEffect(() => {
    setGradient();
  }, []);
  
  return (
    <canvas id="gradient" />
  );
}