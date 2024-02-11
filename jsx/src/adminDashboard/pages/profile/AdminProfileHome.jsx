import Activities from "./components/Activities"
import MySkills from "./components/MySkills"
import Overview from "./components/Overview"

function AdminProfileHome() {
  return (
    <>
      <h1 className="p-relative">Profile</h1>
      <div className="profile-page m-20">
        <Overview/>
        <div className="other-data d-flex gap-20">
          <MySkills/>
          <Activities/>
        </div>
      </div>
    </>
  )
}

export default AdminProfileHome