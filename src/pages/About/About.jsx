import React from "react";
import './style.css';

const About = () => {
  return (
    <>
      <section
        className="about"
      >
        <div className="about_container">
          <div className="about_container--wow about_container--fadeInUp" data-wow-delay=".2s">
            <div className="w-full px-4">
                <div className="mb-12 lg:mb-0">
                  <h2 className="gradient__text text-center mb-12">
                    About Us 
                  </h2>
                  <p className="mb-10 text-base text-justify leading-relaxed text-body-color">
                  OptimumAI is driven by the belief that humans should be at the forefront of AI and technology. As we work towards accelerating the development of intelligent products, our ultimate goal is to ensure that humans retain control over AI. We envision a future where human intelligence remains competitive with AI, fostering a symbiotic relationship between humans and technology. By empowering individuals to understand, shape, and harness the potential of AI, OptimumAI strives to enhance human productivity and contribute to the responsible and ethical evolution of artificial intelligence
                  </p>                  
                </div>
            </div>
          </div>
        </div>
      </section>           
    </>
  );
};

export default About;