import React, { useState, useEffect } from 'react';
import styles from "./style.module.css"

const CounterSection = () => {
  const [engineersCount, setEngineersCount] = useState(0);
  const [challengesCount, setChallengesCount] = useState(0);
  const [partnersCount, setPartnersCount] = useState(0);

  useEffect(() => {
    const finalCounts = {
      engineersCount: 100,
      challengesCount: 20,
      partnersCount: 50
    };

    const incrementInterval = 100;

    const intervalId = setInterval(() => {
      setEngineersCount(prevCount => {
        const diff = finalCounts.engineersCount - prevCount;
        return prevCount + (diff > 0 ? 1 : 0);
      });
      setChallengesCount(prevCount => {
        const diff = finalCounts.challengesCount - prevCount;
        return prevCount + (diff > 0 ? 1 : 0);
      });
      setPartnersCount(prevCount => {
        const diff = finalCounts.partnersCount - prevCount;
        return prevCount + (diff > 0 ? 1 : 0);
      });
    }, incrementInterval);

    // Cleanup function to clear interval when all counters reach their final values
    return () => {
      if (engineersCount === finalCounts.engineersCount &&
          challengesCount === finalCounts.challengesCount &&
          partnersCount === finalCounts.partnersCount) {
        clearInterval(intervalId);
      }
    };

  }, [engineersCount, challengesCount, partnersCount]);

  return (
    <div className={styles.countSection}>
      <div className={styles.countContainer}>
        <h3 className={styles.countTitle}><span className='gradient__text'> Community Stats</span></h3>
        <div className={styles.countGrid}>
          <div className={styles.countStat}>
            <p className={styles.countStatTitle}>Engineers</p>
            <p className={styles.countStatCount}>{engineersCount}+</p>
          </div>
          <div className={styles.countStat}>
            <p className={styles.countStatTitle}>Challenges</p>
            <p className={styles.countStatCount}>{challengesCount}+</p>
          </div>
          <div className={styles.countStat}>
            <p className={styles.countStatTitle}>Partners</p>
            <p className={styles.countStatCount}>{partnersCount}+</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterSection;
