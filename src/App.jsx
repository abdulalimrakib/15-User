import UserPrfile from "./compoents/UserPrfile";
import { useState } from "react";
import allUserData from "./data.json";
import SideCart from "./compoents/SideCart";

function App() {
  const [allUser, setAllUser] = useState(allUserData);

  return (
    <>
      <div className="flex">
        <div className="w-[78%]">
          {allUser.map((allUser) => (
            // console.log(data);
            <UserPrfile allUser={allUser}></UserPrfile>
          ))}
        </div>
        <div className="w-[22%]">
          <SideCart></SideCart>
        </div>
      </div>
    </>
  );
}

export default App;
