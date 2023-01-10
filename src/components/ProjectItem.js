import React from "react";

const technologyHandler = technologies.map((technology) => {
  return <span key={technology} >{technology}</span>
})

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologyHandler}
      </div>
    </div>
  );
}

export default ProjectItem;
