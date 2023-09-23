import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faUserPlus } from '@fortawesome/free-solid-svg-icons';

const UserPrfile = (props) => {
  const userData = props.allUser;
  console.log(userData);
  return (
    <div className="flex justify-between py-5 ml-10 border-b-2 border-r-2 pr-8">
      <div className="flex gap-8">
        <div>
          <img src={userData.img} alt="" />
        </div>
        <div>
          <h2 className="text-center pb-3 font-bold text-[20px]">
            {userData.first_name} {userData.last_name}
          </h2>
          <h4>Email: {userData.email}</h4>
          <h4>Gender: {userData.gender}</h4>
          <h4>Salary: {userData.salary}</h4>
        </div>
      </div>
      <div className="flex items-center">
        <button className="bg-blue-500 rounded-lg px-4 py-1 font-medium">add friend <FontAwesomeIcon className="px-1" icon={faUserPlus}/></button>
      </div>
    </div>
  );
};

export default UserPrfile;
