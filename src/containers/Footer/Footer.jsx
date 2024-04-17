import "./footer.css";
import optimumaiLogo from "../../assets/logo.svg";

const Footer = () => (
  <div className="optimumai__footer section__padding">
    <div className="optimumai__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className="optimumai__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="optimumai__footer-links">
      <div className="optimumai__footer-links_logo">
        <img src={optimumaiLogo} alt="optimumai_logo" />
        <p>
          Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
        </p>
      </div>
      <div className="optimumai__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="optimumai__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="optimumai__footer-links_div">
        <h4>Get in touch</h4>
        <p>Mandsaur, Madhya Pradesh, India</p>
        <p>+91 7024592105</p>
        <p>ajaydhangar49@gmail.com</p>
      </div>
    </div>

    <div className="optimumai__footer-copyright">
      <p>
        @2023 GPT-3. Made with ❤️ by{" "}
        <a
          href="https://ajay-dhangar.github.io/Responsive-portfolio-website.github.io/#home"
          target="_blank"
        >
          Ajay-Dhangar
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
