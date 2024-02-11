import SiteControl from "./components/SiteControl"
import GeneralInfo from "./components/GeneralInfo"
import SecurityInfo from "./components/SecurityInfo"
import SocialInfo from "./components/SocialInfo"
import WidgetsControl from "./components/WidgetsControl"
import BackupManager from "./components/BackupManager"

function AdminSettingsHome() {
  return (
    <>
      <h1 className="p-relative">Settings</h1>
      <div className="settings-page m-20 d-grid gap-20">
        <SiteControl />
        <GeneralInfo />
        <SecurityInfo />
        <SocialInfo />
        <WidgetsControl />
        <BackupManager />
      </div>
    </>
  )
}

export default AdminSettingsHome