import './css/master.css'
import './css/framework.css'
import './css/all.min.css'
import { Route, Routes } from 'react-router-dom'
import AdminHome from './adminDashboard/AdminHome'
import AdminSettingsHome from './adminDashboard/pages/settings/AdminSettingsHome'
import AdminProfileHome from './adminDashboard/pages/profile/AdminProfileHome'
import AdminProjectsHome from './adminDashboard/pages/projects/AdminProjectsHome'
import AdminCoursesHome from './adminDashboard/pages/courses/AdminCoursesHome'
import AdminFriendsHome from './adminDashboard/pages/friends/AdminFriendsHome'
import AdminFilesHome from './adminDashboard/pages/files/AdminFilesHome'
import AdminPlansHome from './adminDashboard/pages/plans/AdminPlansHome'

function App() {

  return (
    <Routes>
    <Route path='/home' element={<AdminHome/>}/>
      <Route path='/settings' element={<AdminSettingsHome/>}/>
      <Route path='/profile' element={<AdminProfileHome/>}/>
      <Route path='/projects' element={<AdminProjectsHome/>}/>
      <Route path='/courses' element={<AdminCoursesHome/>}/>
      <Route path='/friends' element={<AdminFriendsHome/>}/>
      <Route path='/files' element={<AdminFilesHome/>}/>
      <Route path='/plans' element={<AdminPlansHome/>}/>
    </Routes>
  )
}

export default App
