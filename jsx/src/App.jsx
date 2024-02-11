import './css/master.css'
import './css/framework.css'
import './css/all.min.css'
import { Route, Routes } from 'react-router-dom'
import AdminSettingsHome from './adminDashboard/pages/settings/AdminSettingsHome'
import AdminProfileHome from './adminDashboard/pages/profile/AdminProfileHome'
import AdminProjectsHome from './adminDashboard/pages/projects/AdminProjectsHome'
import AdminCoursesHome from './adminDashboard/pages/courses/AdminCoursesHome'
import AdminFriendsHome from './adminDashboard/pages/friends/AdminFriendsHome'
import AdminFilesHome from './adminDashboard/pages/files/AdminFilesHome'
import AdminPlansHome from './adminDashboard/pages/plans/AdminPlansHome'
import AdminLayout from './adminDashboard/AdminLayout'
import AdminHomeHome from './adminDashboard/pages/home/AdminHomeHome'

function App() {

  return (
    <Routes>
      <Route path='/' element={<AdminLayout />}>
        <Route path='home' element={<AdminHomeHome />} />
        <Route path='settings' element={<AdminSettingsHome />} />
        <Route path='profile' element={<AdminProfileHome />} />
        <Route path='projects' element={<AdminProjectsHome />} />
        <Route path='courses' element={<AdminCoursesHome />} />
        <Route path='friends' element={<AdminFriendsHome />} />
        <Route path='files' element={<AdminFilesHome />} />
        <Route path='plans' element={<AdminPlansHome />} />
      </Route>
    </Routes>
  )
}

export default App
