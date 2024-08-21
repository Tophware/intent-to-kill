import { useState } from "react";
import "./App.css";
import authorityLogo from "./assets/icons/authority.svg";
import criminalsLogo from "./assets/icons/criminals.svg";
import governmentLogo from "./assets/icons/government.svg";
import immigrantsLogo from "./assets/icons/immigrants.svg";
import jetsetLogo from "./assets/icons/jetset.svg";
import laborLogo from "./assets/icons/labor.svg"; // Added missing import
import medicineLogo from "./assets/icons/medicine.svg";
import outcastsLogo from "./assets/icons/outcasts.svg"; // Corrected typo from 'outcosts' to 'outcasts'
import pressLogo from "./assets/icons/press.svg";

import GroupCard from "./GroupCard";
import { SocialGroup } from "./types";

function App() {
  const [selectedSocialGroup, setSelectedSocialGroup] =
    useState<SocialGroup | null>(null);
  const handleDismiss = () => setSelectedSocialGroup(null);
  const handleImageClick = (socialGroup: SocialGroup) => {
    setSelectedSocialGroup(socialGroup);
  };

  return (
    <>
      {selectedSocialGroup ? (
        <GroupCard
          socialGroup={selectedSocialGroup}
          onDismiss={handleDismiss}
        />
      ) : (
        <div className="logos">
          <div onClick={() => handleImageClick(SocialGroup.AUTHORITY)}>
            <img src={authorityLogo} alt="Authority" />
          </div>
          <div onClick={() => handleImageClick(SocialGroup.CRIMINALS)}>
            <img src={criminalsLogo} alt="Criminals" />
          </div>
          <div onClick={() => handleImageClick(SocialGroup.GOVERNMENT)}>
            <img src={governmentLogo} alt="Government" />
          </div>
          <div onClick={() => handleImageClick(SocialGroup.IMMIGRANTS)}>
            <img src={immigrantsLogo} alt="Immigrants" />
          </div>
          <div onClick={() => handleImageClick(SocialGroup.JETSET)}>
            <img src={jetsetLogo} alt="Jetset" />
          </div>
          <div onClick={() => handleImageClick(SocialGroup.MEDICINE)}>
            <img src={medicineLogo} alt="Medicine" />
          </div>
          <div onClick={() => handleImageClick(SocialGroup.OUTCASTS)}>
            <img src={outcastsLogo} alt="Outcasts" />
          </div>
          <div onClick={() => handleImageClick(SocialGroup.PRESS)}>
            <img src={pressLogo} alt="Press" />
          </div>
          <div onClick={() => handleImageClick(SocialGroup.LABOR)}>
            <img src={laborLogo} alt="Labor" />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
