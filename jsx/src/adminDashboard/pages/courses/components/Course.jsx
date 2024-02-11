import PropTypes from 'prop-types';

const Course = ({ coverSrc, instructorSrc, title, description, users, price }) => {
  return (
    <div className="course bg-white rad-6 p-relative">
      <img className="cover" src={coverSrc} alt="" />
      <img className="instructor" src={instructorSrc} alt="" />
      <div className="p-20">
        <h4 className="m-0">{title}</h4>
        <p className="description c-grey mt-15 fs-14">{description}</p>
      </div>
      <div className="info p-15 p-relative between-flex">
        <span className="title bg-blue c-white btn-shape">Course Info</span>
        <span className="c-grey">
          <i className="fa-regular fa-user"></i>
          {users}
        </span>
        <span className="c-grey">
          <i className="fa-solid fa-dollar-sign"></i>
          {price}
        </span>
      </div>
    </div>
  );
};

Course.propTypes = {
    coverSrc: PropTypes.string.isRequired,
    instructorSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    users: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  };

export default Course;
