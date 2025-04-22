import React from "react";
import "./Project.css";
import mywork_data from "../mywork_data";

const Projects = () => {
  return (
    <div className="myWork">
      <div className="my-work-title">
        <h1>My latest work</h1>
      </div>
      <div className="mywork-container">
        <ul>
          {mywork_data.map((work, index) => (
            <li key={index} className="mywork-item">
              <h2>{work.w_name}</h2>
              <p>{work.w_description}</p>
              {work.w_address && (
                <a
                  href={work.w_address}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
