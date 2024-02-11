import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Project = ({ date, title, description, team, categories, progress, cost }) => {
    return (
        <div className="project bg-white p-20 rad-6 p-relative">
            <span className="date fs-13 c-grey">{date}</span>
            <h4 className="m-0">{title}</h4>
            <p className="c-grey mt-10 mb-10 fs-14">{description}</p>
            <div className="team">
                {team.map((teamMember, index) => (
                    <Link key={index} to="#">
                        <img src={teamMember} alt="" />
                    </Link>
                ))}
            </div>
            <div className="do d-flex">
                {categories.map((category, index) => (
                    <span key={index} className="fs-13 rad-6 bg-eee">
                        {category}
                    </span>
                ))}
            </div>
            <div className="info between-flex">
                <div className="prog bg-eee">
                    <span className={`bg-${progress.color}`} style={{ width: progress.width }}></span>
                </div>
                <div className="fs-14 c-grey">
                    <i className="fa-solid fa-dollar-sign"></i>
                    {cost}
                </div>
            </div>
        </div>
    );
};

Project.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    team: PropTypes.arrayOf(PropTypes.string).isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    progress: PropTypes.shape({
        color: PropTypes.string.isRequired,
        width: PropTypes.string.isRequired,
    }).isRequired,
    cost: PropTypes.number.isRequired,
};

export default Project;
