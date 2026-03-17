import users from "../Api/user.json";

// Users component
const Users = () => {
  return (
    <div className="py-5 space-y-3.5">
      <h1 className="font-bold text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl leading ">
        Made For You
      </h1>
      <p className="text-base sm:text-xl text-center text-[#484744] font-normal leading">
        Students, professionals, creatives. build your perfect resume in
        minutes.
      </p>
      <div className=" flex flex-wrap justify-center items-center gap-3 sm:gap-5">
        {users.map((elem, idx) => {
          return (
            <div key={idx} className="bg-white shadow-xl rounded-2xl space-y-3.5 p-2">
              <img className="h-50 sm:h-60" src={elem.img} alt="user" />
              <h1 className="text-xl sm:text-2xl font-bold text-center">{elem.text}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
