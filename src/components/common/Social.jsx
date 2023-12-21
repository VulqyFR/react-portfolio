import React from "react";

const Social = ({ href, Icon, target }) => {
  return (
    <a
      href={href}
      target={target}
      className="introduction__social introduction__social-link"
    >
      <Icon className="introduction__social-img" />
    </a>
  );
};

export default Social;
