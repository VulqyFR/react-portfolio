import React from "react";

const Social = ({ href, Icon }) => {
  return (
    <a href={href} className="introduction__social introduction__social-link">
      <Icon className="introduction__social-img" />
    </a>
  );
};

export default Social;
