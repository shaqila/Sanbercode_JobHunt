import Cookies from "js-cookie";
import React from "react";

const Header = () => {
  const user = JSON.parse(Cookies.get("user"));
  return (
    // <div className="bg-white shadow-lg z-40 flex items-center justify-between w-full h-14">
    <div className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-white">
      {/* <h1 className="mx-auto">Hello to {user.name}</h1> */}
      <div className="flex flex-shrink-0 items-center space-x-4 text-black capitalize">
        {/* Texto */}
        <div className="flex flex-col items-end ">
          {/* Nome */}
          <div className="text-md font-medium ">{user.name}</div>
          {/* Título */}
          <div className="text-sm font-regular">Admin</div>
        </div>
        {/* Foto */}
        <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-yellow-200" />
      </div>
    </div>
  );
};

export default Header;
