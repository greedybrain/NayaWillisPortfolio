import Project from "./Project";
import ProjectVideoDemo from "../projectVideos/ProjectVideoDemo";
import React from "react";
import projects from "../projects/data/projects.json";

const Projects = () => {
    return (
        <ul>
            {projects.map((project, index) => {
                return (
                    <Project key={project.name} index={index} {...project} />
                );
            })}
        </ul>
    );
};

export default Projects;
