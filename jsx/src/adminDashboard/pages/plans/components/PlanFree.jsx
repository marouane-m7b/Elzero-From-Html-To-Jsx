import { Link } from 'react-router-dom'

function PlanFree() {
    return (
        <div className="plan green bg-white p-20">
            <div className="top bg-green txt-c p-20">
                <h2 className="m-0 c-white">Free</h2>
                <div className="price c-white"><span>$</span>0.00</div>
            </div>
            <ul>
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
                    <i className="fa-solid fa-xmark fa-fw"></i>
                    <span>Browse Content Without Ads</span>
                    <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                    <i className="fa-solid fa-xmark fa-fw"></i>
                    <span>Access All Assignments</span>
                    <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                    <i className="fa-solid fa-xmark fa-fw"></i>
                    <span>Get Daily Prizes</span>
                    <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                    <i className="fa-solid fa-xmark fa-fw"></i>
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
            <Link to="#" className="btn-shape bg-green c-white d-block w-fit">Join</Link>
        </div>
    )
}

export default PlanFree