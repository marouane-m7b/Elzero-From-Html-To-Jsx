import { Link, useLocation } from "react-router-dom"

function AdminSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  let path = currentPath;
  let newPathSlice = path.slice(1);
  console.log(newPathSlice);

  return (
    <div className="sidebar bg-white p-20 p-relative">
      <h3 className="p-relative txt-c mt-0">Administrateur</h3>
      <ul>
        <li>
          <Link className={`${newPathSlice === "home" ? "active" : ""} d-flex align-center fs-14 c-black rad-6 p-10`} to="/home">
            <i className="fa-regular fa-chart-bar fa-fw"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link className={`${newPathSlice === "settings" ? "active" : ""} d-flex align-center fs-14 c-black rad-6 p-10`} to="/settings">
            <i className="fa-solid fa-gear fa-fw"></i>
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <Link className={`${newPathSlice === "profile" ? "active" : ""} d-flex align-center fs-14 c-black rad-6 p-10`} to="/profile">
            <i className="fa-regular fa-user fa-fw"></i>
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link className={`${newPathSlice === "projects" ? "active" : ""} d-flex align-center fs-14 c-black rad-6 p-10`} to="/projects">
            <i className="fa-solid fa-diagram-project fa-fw"></i>
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link className={`${newPathSlice === "courses" ? "active" : ""} d-flex align-center fs-14 c-black rad-6 p-10`} to="/courses">
            <i className="fa-solid fa-graduation-cap fa-fw"></i>
            <span>Courses</span>
          </Link>
        </li>
        <li>
          <Link className={`${newPathSlice === "friends" ? "active" : ""} d-flex align-center fs-14 c-black rad-6 p-10`} to="/friends">
            <i className="fa-regular fa-circle-user fa-fw"></i>
            <span>Friends</span>
          </Link>
        </li>
        <li>
          <Link className={`${newPathSlice === "files" ? "active" : ""} d-flex align-center fs-14 c-black rad-6 p-10`} to="/files">
            <i className="fa-regular fa-file fa-fw"></i>
            <span>Files</span>
          </Link>
        </li>
        <li>
          <Link className={`${newPathSlice === "plans" ? "active" : ""} d-flex align-center fs-14 c-black rad-6 p-10`} to="/plans">
            <i className="fa-regular fa-credit-card fa-fw"></i>
            <span>Plans</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default AdminSidebar