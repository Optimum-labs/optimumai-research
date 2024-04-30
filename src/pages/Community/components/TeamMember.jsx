import React from 'react';
// , FaEnvelope
import { FaLinkedin } from 'react-icons/fa';
import teamMembers from '../../../data/teamMembers';

import styles from "./style.module.css"

const TeamMemberList = () => {
  
  return (
    <div className={styles.teamSection}>
      <div className={styles.teamContainer}>
        <div className={styles.teamTitle}>
          <span className='gradient__text'>Our Team</span>
        </div>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div className={styles.teamCard} key={index}>
              <img className={styles.teamImage} src={member.imageUrl} alt={member.name} />
              <p className={styles.teamName}>{member.name}</p>
              <p className={styles.teamRole}>{member.role}</p>
              <div className={styles.teamSocialLinks}>
                
                {/* <a href={member.social.email} target="_blank" rel="noopener noreferrer">
                  <FaEnvelope />
                </a> */}
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberList;
