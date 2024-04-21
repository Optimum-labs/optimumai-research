import React, { useState, useEffect } from 'react';

const sectionStyle = {
  padding: '48px 0',
};

const containerStyle = {
  maxWidth: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const titleStyle = {
  fontSize: '1.75rem',
  fontWeight: '600',
  marginBottom: '1rem',
  textAlign: 'center',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '2rem',
};

const statStyle = {
  textAlign: 'center',
};

const statTitleStyle = {
  fontSize: '1.25rem',
  fontWeight: '600',
};

const statCountStyle = {
  fontSize: '2rem',
  fontWeight: '700',
};

const CounterSection = () => {
  const [engineersCount, setEngineersCount] = useState(0);
  const [challengesCount, setChallengesCount] = useState(0);
  const [partnersCount, setPartnersCount] = useState(0);

  useEffect(() => {
    const finalCounts = {
      engineersCount: 100,
      challengesCount: 20,
      partnersCount: 50,
    };

    const incrementInterval = 100;

    const intervalId = setInterval(() => {
      setEngineersCount((prevCount) => {
        const diff = finalCounts.engineersCount - prevCount;
        return prevCount + (diff > 0 ? 1 : 0);
      });
      setChallengesCount((prevCount) => {
        const diff = finalCounts.challengesCount - prevCount;
        return prevCount + (diff > 0 ? 1 : 0);
      });
      setPartnersCount((prevCount) => {
        const diff = finalCounts.partnersCount - prevCount;
        return prevCount + (diff > 0 ? 1 : 0);
      });
    }, incrementInterval);

    // Cleanup function to clear interval when all counters reach their final values
    return () => {
      if (
        engineersCount === finalCounts.engineersCount &&
        challengesCount === finalCounts.challengesCount &&
        partnersCount === finalCounts.partnersCount
      ) {
        clearInterval(intervalId);
      }
    };
  }, [engineersCount, challengesCount, partnersCount]);

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h3 style={titleStyle}>Our Community Stats</h3>
        <div style={gridStyle} className='text-body-color dark:text-dark-6'>
          <div style={statStyle}>
            <h3 style={statTitleStyle}>Engineers</h3>
            <p style={statCountStyle}>{engineersCount}+</p>
          </div>
          <div style={statStyle}>
            <h3 style={statTitleStyle}>Challenges</h3>
            <p style={statCountStyle}>{challengesCount}+</p>
          </div>
          <div style={statStyle}>
            <h3 style={statTitleStyle}>Partners</h3>
            <p style={statCountStyle}>{partnersCount}+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;