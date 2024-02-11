import PropTypes from 'prop-types';

const File = ({ iconSrc, fileName, createdBy, date, size }) => (
    <div className="file bg-white p-10 rad-10">
        <i className="fa-solid fa-download c-grey p-absolute"></i>
        <div className="icon txt-c">
            <img className="mt-15 mb-15" src={iconSrc} alt="" />
        </div>
        <div className="txt-c mb-10 fs-14">{fileName}</div>
        <p className="c-grey fs-13">{createdBy}</p>
        <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>{date}</span>
            <span>{size}</span>
        </div>
    </div>
);


File.propTypes = {
    iconSrc: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
    createdBy: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
};


export default File;
