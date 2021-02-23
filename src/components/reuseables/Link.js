import React from 'react';

const Link = props => {
  return (
    <a
      {...props}
      href={props.to}
      target={props.newTab ? '_blank' : null}
      rel={props.newTab ? 'noopener noreferrer' : null}
    >
      {props.children}
    </a>
  );
};

export default Link;
