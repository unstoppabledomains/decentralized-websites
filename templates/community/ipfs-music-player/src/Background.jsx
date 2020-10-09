import React from 'react'

export default function Background() {

  const styles = {
    background: `linear-gradient(rgba(35, 7, 77, 1), rgba(204, 83, 51, 1))`,
    width: `100vw`,
    height: `100vh`  
  };
  
  return (
    <canvas id="gradient" style={ styles } />
  );
}