import React from 'react';

const Link = props => {
  return (
    <a
      style={props.style}
      href={props.src}
      target={props.newTab ? '_blank' : null}
      rel={props.newTab ? 'noopener noreferrer' : null}
    >
      {props.children}
    </a>
  );
};

export default Link;
