import React from "react";
import HeaderSection from "./components/HeaderSection";
import CounterSection from "./components/CounterSection";
import TeamMemberList from "./components/TeamMember";

import "./community.css";

const CommunityPage = () => {
  return (
    <div className="community">
      <main>
        <div className="community-container">
          <HeaderSection />
          <CounterSection />
          <TeamMemberList />
        </div>
      </main>
    </div>
  );
};

export default CommunityPage;
