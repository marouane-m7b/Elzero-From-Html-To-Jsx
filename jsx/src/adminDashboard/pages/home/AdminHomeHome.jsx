import Welcome from "./components/Welcome"
import QuickDraft from "./components/QuickDraft"
import Targets from "./components/Targets"
import Tickets from "./components/Tickets"
import Tasks from "./components/Tasks"
import SocialMedia from "./components/socialMedia/SocialMedia"
import SearchItems from "./components/SearchItems"
import LatestUploads from "./components/LatestUploads"
import LatestNews from "./components/LatestNews"
import LatestPost from "./components/LatestPost"
import Projects from "./components/Projects"
import LastProject from "./components/LastProject"
import Reminders from "./components/Reminders"

function AdminHomeHome() {
  return (
    <>
      <h1 className="p-relative">Dashboard</h1>
      <div className="wrapper d-grid gap-20">
        <Welcome />
        <QuickDraft />
        <Targets />
        <Tickets />
        <LatestNews />
        <Tasks />
        <SearchItems />
        <LatestUploads />
        <LastProject />
        <Reminders />
        <LatestPost />
        <SocialMedia />
      </div>
      <Projects />
    </>
  )
}

export default AdminHomeHome