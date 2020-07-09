import React from "react";

function Project(props) {
  const {
    project: { name, deploy_url, github_url, description, image, image_alt },
  } = props;
  return (
    <div>
      <h4>{name}</h4>
      <p>{description}</p>
      <img src={image} alt={image_alt} />
      <a href={deploy_url} target="_blank" rel="noopener noreferrer">
        <span>See it live</span>
      </a>
    </div>
  );
}

export default Project;
