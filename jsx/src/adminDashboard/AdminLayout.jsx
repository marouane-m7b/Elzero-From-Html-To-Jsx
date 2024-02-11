import { Outlet } from "react-router-dom"
import AdminNavbar from "./AdminNavbar"
import AdminSidebar from "./AdminSidebar"


function AdminLayout() {
    return (
        <div className="page d-flex">
            <AdminSidebar />
            <div className="content w-full">
                <AdminNavbar />
                <Outlet />
            </div>
        </div>
    )
}

AdminLayout.propTypes = {}

export default AdminLayout
