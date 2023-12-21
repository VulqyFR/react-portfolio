import React from "react";
import { ButtonAbout } from "./Buttons";
import Social from "./Social";
import { Github, Linkedin, Twitter } from "lucide-react";

const Introduction = ({ languageData }) => {
  return (
    <div className="introduction">
      <div className="introduction__container--blur">
        <div className="introduction__news">
          <p className="introduction__news-title">
            {languageData.introduction.news}
          </p>
        </div>
        <div className="introduction__title">
          <h3>{languageData.introduction.title}</h3>
          <h1>
            <span className="introduction__title--curly">&#123;</span>Elvin
            Chauvel<span className="introduction__title--curly">&#125;</span>
            <br />
            {languageData.introduction.job} <br />
            {languageData.introduction.at}{" "}
            <span className="introduction__title--span">Saint-Adjutor</span>
          </h1>
        </div>
        <div className="introduction__description">
          <p className="introduction__description-text">
            {languageData.introduction.description}
          </p>
        </div>
        <ButtonAbout>{languageData.introduction.about}</ButtonAbout>
        <div className="introduction__socials">
          <Social
            href="https://github.com/VulqyFR"
            target="_blank"
            Icon={Github}
          />
          <Social
            href="https://twitter.com/elvinchauvel"
            target="_blank"
            Icon={Twitter}
          />
          <Social
            href="https://www.linkedin.com/in/elvin-chauvel-69800827a/"
            target="_blank"
            Icon={Linkedin}
          />
        </div>
      </div>
    </div>
  );
};
export default Introduction;
