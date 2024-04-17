import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="optimumai__header section__padding" id="home">
      <div className="optimumai__header-content">
        <h1 className="gradient__text">
          Let's make your life easier with Optimum AI
        </h1>
        <p>
          OptimumAI is a AI based platform that can help you with your daily life.     
          It can help you with soft skills assesment, job interview preparation, mental health, financial planning, and much more.
        </p>

        <div className="optimumai__header-content__input">
          <input type="email" placeholder="Your Email Address"/>
          <button type="button">Get Started</button>
        </div>

        <div className="optimumai__header-content__people">
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="optimumai__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header;