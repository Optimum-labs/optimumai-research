import React, { useState, useEffect } from 'react';
// import styles from "./style.module.css";
const HeaderSection = () => {
  const [typingText, setTypingText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const texts = [
      "Join our community of AI enthusiasts.",
      "Stay updated with the latest advancements.",
      "Collaborate with like-minded professionals."
    ];

    const intervalId = setInterval(() => {
      setTypingText(prevText => {
        if (prevText === texts[textIndex]) {
          setTextIndex((textIndex + 1) % texts.length);
          return '';
        } else {
          return texts[textIndex].substring(0, prevText.length + 1);
        }
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, [textIndex]);

  return (
    <section className="community-section">
      <h2 className="title gradient__text text-center mb-12">Welcome to Our Community!</h2>
      <p className="text">
        We are a community of AI enthusiasts, researchers, and professionals. We are passionate about the latest advancements in AI and machine learning. Our goal is to collaborate and share knowledge with like-minded individuals. We invite you to join our community and stay updated with the latest trends and research in AI and machine learning.
      </p>
      <br />
      <div className="container">
        <p className="text">
          <span>{typingText}</span>
          <span className="cursor">
            ✍️
          </span>
        </p>
      </div>
    </section>
  );
}

export default HeaderSection;