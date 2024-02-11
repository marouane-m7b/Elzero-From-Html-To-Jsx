import FileList from "./components/FileList";
import FileStatics from "./components/FileStatics";


const AdminFilesHome = () => {

  return (
    <>
      <h1 className="p-relative">Files</h1>
      <div className="files-page d-flex m-20 gap-20">
        <FileStatics />
        <FileList />
      </div>
    </>
  );
}

export default AdminFilesHome;
