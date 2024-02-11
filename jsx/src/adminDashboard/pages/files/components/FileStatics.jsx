// FileStatics.jsx
import { Link } from 'react-router-dom';
import fileStatsData from './data/fileStatsData';

const FileStatics = () => {
  return (
    <div className="files-stats p-20 bg-white rad-10">
      <h2 className="mt-0 mb-15 txt-c-mobile">Files Statistics</h2>
      {fileStatsData.map((stat, index) => (
        <div key={index} className="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
          <i className={stat.iconClass}></i>
          <div className="info">
            <span>{stat.label}</span>
            <span className="c-grey d-block mt-5">{stat.count} Files</span>
          </div>
          <div className="size c-grey">{stat.size}</div>
        </div>
      ))}
      <Link className="upload bg-blue c-white fs-13 rad-6 d-block w-fit" to="#">
        <i className="fa-solid fa-angles-up mr-10"></i>
        Upload
      </Link>
    </div>
  );
}

export default FileStatics;
