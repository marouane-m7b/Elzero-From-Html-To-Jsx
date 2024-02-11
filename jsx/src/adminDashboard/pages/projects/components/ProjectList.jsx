import Project from './Project';
import projectsData from './data/projectsData';

const ProjectList = () => {
    return (
        <div className="projects-page d-grid m-20 gap-20">
            {projectsData.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </div>
    );
};

export default ProjectList;
