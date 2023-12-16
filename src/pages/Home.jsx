import React from "react";
import Navbar from "../components/header/Navbar";
import Console from "../components/common/Console";
import Introduction from "../components/common/Introduction";
import useLanguageContext from "../hooks/useLanguageContext";
import useWindowSize from "../hooks/useWindowSize";

const SCREEN_SIZE_THRESHOLD = 1024;

const Home = () => {
  const windowWidth = useWindowSize();
  const isMobileView = windowWidth < SCREEN_SIZE_THRESHOLD;
  const { languageData } = useLanguageContext();
  return (
    <div className="home__wrapper">
      <Navbar isMobileView={isMobileView} />
      <div className="home__container">
        <Introduction languageData={languageData} />
        <Console languageData={languageData} />
      </div>
    </div>
  );
};

export default Home;
