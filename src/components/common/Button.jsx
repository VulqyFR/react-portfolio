import React from "react";

export const ButtonContact = ({ children }) => {
  return <button className="button__primary">{children}</button>;
};

export const ButtonAbout = ({ children }) => {
  return <button className="introduction__button--about">{children}</button>;
};

export default ButtonContact;
