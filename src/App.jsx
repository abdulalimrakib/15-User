import UserPrfile from "./compoents/UserPrfile";
import { useState } from "react";
import allUserData from "./data.json";
import SideCart from "./compoents/SideCart";

function App() {
  const [allUser, setAllUser] = useState(allUserData);
  const [user, setUser] = useState([])

const addhandling = (userData) =>{
  let newUser = [...user,userData];

  for(let i = 0; i<newUser.length;i++){
    for (let j = i + 1; j < newUser.length; j++)  
        {   
            if ( newUser[i] == newUser[j])  
            {    
                for (let k = j; k < newUser.length - 1; k++)  
                {  
                  newUser[k] = newUser[k + 1];  
                }  
                newUser.length--;  
                j--;      
            }  
        }  
  }   
    setUser(newUser);
}


  return (
    <>
      <div className="flex">
        <div className="w-[78%]">
          {allUser.map((allUser) => (
            // console.log(data);
            <UserPrfile addhandling={addhandling} allUser={allUser}></UserPrfile>
          ))}
        </div>
        <div className="w-[22%]">
          <SideCart user={user}></SideCart>
        </div>
      </div>
    </>
  );
}

export default App;
