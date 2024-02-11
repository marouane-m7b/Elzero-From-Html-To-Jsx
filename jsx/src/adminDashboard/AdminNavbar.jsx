function AdminNavbar() {
  return (
    <div className="head bg-white p-15 between-flex">
    <div className="search p-relative">
        <input className="p-10" type="search" placeholder="Type A Keyword" />
    </div>
    <div className="icons d-flex align-center">
        <span className="notification p-relative">
            <i className="fa-regular fa-bell fa-lg"></i>
        </span>
        <img src="imgs/avatar.png" alt="" />
    </div>
</div>
  )
}

export default AdminNavbar