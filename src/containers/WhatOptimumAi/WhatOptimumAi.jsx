import { Feature } from "../../components";
import "./WhatOptimumAi.css";

const WhatOptimumAi = () => (
  <div className="optimumai__whatoptimumai section__margin" id="woptimumai">
    <div className="optimumai__whatoptimumai-feature">
      <Feature
        title="What is OptimumAI?"
        text={[
          "OptimumAI is an AI-based platform dedicated to enhancing your daily life. Our mission is to leverage cutting-edge technology to provide superior services for society. Comprising a team with unique potential, we are committed to delivering innovative AI services based on rigorous research.",
          "India, a country brimming with young and bright minds, is where we bring our vision to life. Through our platform, we aim to unlock this potential by providing a stage to showcase their talent.",
          "OptimumAI offers a range of services including soft skills assessment, job interview preparation, mental health support, and financial planning, among others. To learn more about OptimumAI and our offerings, please visit our ‘About’ page."
        ]}
      />
    </div>
    <div className="optimumai__whatoptimumai-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore more...</p>
    </div>
    <div className="optimumai__whatoptimumai-container">
      <Feature
        title="Chatbots"
        text={[
          "We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        ]}
      />
      <Feature
        title="Knowledgebase"
        text={[
          "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        ]}
      />
      <Feature
        title="Education"
        text={[
          "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        ]}
      />
    </div>
  </div>
);

export default WhatOptimumAi;
