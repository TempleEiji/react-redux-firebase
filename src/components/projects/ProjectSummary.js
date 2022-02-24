import React from 'react'
import dayjs from 'dayjs'

const ProjectSummary = ({project}) => {
    return (
        <div class="col s12 m12 project-summary">
            <div class="card horizontal">
            <div class="card-stacked">
                <div class="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>{project.content}</p>
                    <p>Posted by the {project.authorFirstName} {project.authorLastName}</p>
                    <p className="grey-text">{ dayjs(project.createdAt).format('YYYY-MM-DD HH:mm:ss')}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ProjectSummary;