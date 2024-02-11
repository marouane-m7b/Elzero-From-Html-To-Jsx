import Friend from "./Friend";
import friendsData from "./data/friendsData";

function FreindList() {
  return (
    <div className="friends-page d-grid m-20 gap-20">
      {friendsData.map((friend, index) => (
        <Friend key={index} friendData={friend} />
      ))}
    </div>
  )
}

export default FreindList