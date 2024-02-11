
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SocialMediaItem({ platform }) {
    const { iconClass, label, count, btnText } = platform;

    return (
        <>
            <div className={`box ${label.toLowerCase()} p-15 p-relative mb-10 between-flex`}>
                <i className={`fa-brands ${iconClass} fa-2x c-white h-full center-flex`}></i>
                <span style={{ marginLeft: "55px" }}>{count}</span>
                <Link className="fs-13 c-white btn-shape" to="#">
                    {btnText}
                </Link>
            </div>
        </>
    );
}


SocialMediaItem.propTypes = {
    platform: PropTypes.shape({
        iconClass: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        count: PropTypes.string.isRequired,
        btnText: PropTypes.string.isRequired,
    }).isRequired,
};

export default SocialMediaItem;