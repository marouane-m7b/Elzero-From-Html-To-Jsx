import File from "./File";
import filesData from "./data/filesData";

const FileList = () => (
    <div className="files-content d-grid gap-20">
      {filesData.map((file, index) => (
        <File
          key={index}
          iconSrc={file.iconSrc}
          fileName={file.fileName}
          createdBy={file.createdBy}
          date={file.date}
          size={file.size}
        />
      ))}
    </div>
  );
  
  export default FileList;