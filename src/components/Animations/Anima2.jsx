import React, { useEffect } from 'react';
import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';
import './anima2.css'; // Import your CSS file

const Anima2 = ({ children }) => {
  useEffect(() => {
    // Initialize neon cursor effect
    neonCursor({
      el: document.getElementById('app'),
      shaderPoints: 16,
      curvePoints: 80,
      curveLerp: 0.5,
      radius1: 5,
      radius2: 30,
      velocityTreshold: 10,
      sleepRadiusX: 100,
      sleepRadiusY: 100,
      sleepTimeCoefX: 0.0025,
      sleepTimeCoefY: 0.0025
    });

    // Cleanup function
    return () => {
      // You can perform cleanup here if needed
    };
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <div className="anima">
      <div className="hero">
        {children}
      </div>
    </div>
  );
};

export default Anima2;
