import React from "react";
import { ButtonAbout } from "./Button";
import Social from "./Social";
import { GitHub } from "react-feather";
import { Twitter } from "react-feather";
import { Linkedin } from "react-feather";

const Introduction = ({ languageData }) => {
  return (
    <>
      <div className="introduction">
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
          <Social href="your_href" Icon={GitHub} />
          <Social href="your_href" Icon={Twitter} />
          <Social href="your_href" Icon={Linkedin} />
        </div>
      </div>
    </>
  );
};
export default Introduction;
