import { useEffect } from "react";
import gsap from "gsap";
import "./header.css";
// import people from '../../assets/people.png';
import ai from "../../assets/img-5.png";

const Header = () => {
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
    <div className="optimumai__header--body">
      <div className="optimumai__header section__padding" id="home">
        <div className="optimumai__header-content">
          <h1 className="gradient__text">
            Research & Build <br />
            AI Solutions
          </h1>
          <p>
            Your personal AI companion for everyday life. From honing your soft
            skills to acing your next job interview, from maintaining mental
            wellness to planning your finances, we’ve got you covered. Discover
            a world of possibilities, and let us help you navigate life’s
            challenges with ease.
          </p>

          <div className="optimumai__header-content__input">
            <button type="button"> Talk to Us </button>,
            <button>Start For Free</button>
          </div>

          {/* <div className="optimumai__header-content__input">
          <input type="email" placeholder="Your Email Address"/>
          <button type="button">Get Started</button>
        </div>

        <div className="optimumai__header-content__people">
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div> */}
        </div>
        <div className="optimumai__header-image">
          <img src={ai} alt="ai" />
        </div>

        <div className="optimumai__header-particles">
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
      </div>
    </div>
  );
};

export default Header;
