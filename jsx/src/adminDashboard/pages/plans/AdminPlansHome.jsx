import PlanFree from "./components/PlanFree"
import PlanBasic from "./components/PlanBasic"
import PlanPremium from "./components/PlanPremium"

function AdminPlansHome() {
  return (
    <>
      <h1 className="p-relative">Plans</h1>
      <div className="plans-page d-grid m-20 gap-20">
        <PlanFree />
        <PlanBasic />
        <PlanPremium />
      </div>
    </>
  )
}

export default AdminPlansHome