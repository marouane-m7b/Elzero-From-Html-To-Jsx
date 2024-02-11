import { Link } from "react-router-dom"

function PlanBasic() {
    return (
        <div className="plan blue bg-white p-20">
            <div className="top bg-blue txt-c p-20">
                <h2 className="m-0 c-white">Basic</h2>
                <div className="price c-white"><span>$</span>7.99</div>
            </div>
            <ul className="list-none p-0">
                <li>
                    <i className="fa-solid fa-check fa-fw yes"></i>
                    <span>Access All Text Lessons</span>
                    <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                    <i className="fa-solid fa-check fa-fw yes"></i>
                    <span>Access All Videos Lessons</span>
                    <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                    <i className="fa-solid fa-check fa-fw yes"></i>
                    <span>Appear On Leaderboard</span>
                    <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                    <i className="fa-solid fa-check fa-fw yes"></i>
                    <span>Browse Content Without Ads</span>
                    <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                    <i className="fa-solid fa-check fa-fw yes"></i>
                    <span>Access All Assignments</span>
                    <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                    <i className="fa-solid fa-check fa-fw yes"></i>
                    <span>Get Daily Prizes</span>
                    <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                    <i className="fa-solid fa-check fa-fw yes"></i>
                    <span>Earn Certificate</span>
                    <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                    <i className="fa-solid fa-xmark fa-fw"></i>
                    <span>1 GB Space For Hosting Files</span>
                    <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                    <i className="fa-solid fa-xmark fa-fw"></i>
                    <span>Access Badge System</span>
                    <i className="fa-solid fa-circle-info help"></i>
                </li>
            </ul>
            <Link to="#" className="btn-shape bg-blue c-white d-block w-fit">Join</Link>
        </div>
    )
}

export default PlanBasic