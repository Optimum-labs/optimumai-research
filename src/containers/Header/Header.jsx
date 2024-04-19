import "./header.css";
// import people from '../../assets/people.png';
import ai from "../../assets/img-5.png";

const Header = () => {
  return (
    <div className="optimumai__header section__padding" id="home">
      <div className="optimumai__header-content">
        <h1 className="gradient__text">
          Research & Build <br />
          AI Solutions
        </h1>
        <p>
          Your personal AI companion for everyday life. From honing your soft
          skills to acing your next job interview, from maintaining mental
          wellness to planning your finances, we’ve got you covered. Discover a
          world of possibilities, and let us help you navigate life’s challenges
          with ease.
        </p>

        <div className="optimumai__header-content__input">
          <button type="button"> Talk to Us </button>
          ,<button>Start For Free</button>
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
    </div>
  );
};

export default Header;
