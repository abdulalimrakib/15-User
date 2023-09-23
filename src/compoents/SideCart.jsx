const SideCart = (props) => {
  let sum = 0;
  for (let i = 0; i < props.user.length; i++) {
    sum = props.user[i].salary + sum;
  }

  return (
    <div className="p-5">
      <h2 className="py-5 text-[24px] font-medium text-center">Your Connection</h2>
      <div className="flex justify-between">
        <div className="font-bold">
          <h4>Friends:</h4>
          <p className="text-[18px] py-2 text-red-600">Total Salary:</p>
        </div>
        <div className="font-bold">
          <h4>{props.user.length}</h4>
          <p className="text-[18px] py-2 text-red-600">{sum}</p>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
