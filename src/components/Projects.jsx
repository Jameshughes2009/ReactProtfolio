import React, {useState} from "react";
import { FaGithubSquare } from "react-icons/fa";
import { GrDeploy} from "react-icons/gr"
import { groupPojects } from "../utils/groupProjects";
import { moduleList } from "../utils/moduleList";
import { schoolRepo } from "../utils/schoolRepo";

export default function Projects() {
    const [projects] = useState(groupPojects);
    const [school] = useState(schoolRepo);
    const [module] = useState(moduleList);


    return(
        <>
            <div id="team-projects-container" className="container">
                <h2 className="project-title">Team Group work at UofT</h2>
                <div className="row">
                    {projects.map ((project, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card">
                                <img
                                    id="project-images"
                                    src={project.projectName}
                                    className="card-img-top"
                                    alt={project.projectName}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}