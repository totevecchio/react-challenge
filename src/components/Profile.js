import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="ml-16 bg-gray-700 h-2/4 w-3/4 md:w-2/4 rounded-3xl shadow-lg flex flex-col justify-center items-center text-center md:mx-2 border-10 border-gray-900-25">
          <img
            src={user.picture}
            alt={user.name}
            className="rounded-full  md:h-40 md:w-40 shadow-sm border-4 border-yellow-400"
          />
          <h2 className="uppercase  md:text-2xl  font-medium text-white tracking-wider">
            {user.name}
          </h2>
          <p className=" uppercase  text-xs	 ont-medium text-white tracking-wider">
            {user.email}
          </p>
        </div>
      </div>
    )
  );
};

export default Profile;
