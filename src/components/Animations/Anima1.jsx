import { useEffect } from "react";
import gsap from "gsap";

import "./anima1.css";

const Anima1 = () => {
  useEffect(() => {
    const particles = document.querySelectorAll(".particle");

    const moveParticles = (e) => {
      gsap.to(particles, {
        left: e.clientX,
        top: e.clientY,
        stagger: -0.03,
      });

      gsap.to("#stars", {
        left: e.clientX,
        top: e.clientY,
        stagger: -0.03,
      });

      gsap.to("#stars2", {
        left: e.clientX,
        top: e.clientY,
        stagger: -0.03,
      });

      gsap.to("#stars3", {
        left: e.clientX,
        top: e.clientY,
        stagger: -0.03,
      });
    };

    document.addEventListener("mousemove", moveParticles);

    return () => {
      document.removeEventListener("mousemove", moveParticles);
    };
  }, []);

  return (
    <div className="optimumai__header--particles">
      {Array.from({ length: 100 }).map((_, index) => (
        <div
          key={index}
          className="particle"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            width: `${Math.random() * 4}px`,
            height: `${Math.random() * 4}px`,
            animationDuration: `${Math.random() * 2 + 1}s`,
          }}
        >
          <div
            className="particle__inner"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              width: `${Math.random() * 10}px`,
              height: `${Math.random() * 10}px`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          ></div>
          <div
            className="particle__inner--2"
            style={{
              left: `${Math.random() * 10}vw`,
              top: `${Math.random() * 100}vh`,
              width: `${Math.random() * 10}px`,
              height: `${Math.random() * 10}px`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          ></div>
          <div
            className="particle__inner--3"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              width: `${Math.random() * 10}px`,
              height: `${Math.random() * 10}px`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Anima1;