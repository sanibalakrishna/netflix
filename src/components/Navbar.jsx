import React from "react";
import logo from "./../assets/images/logo.png";
import user from "./../assets/images/user.png";

function Navbar({ search, setSearch }) {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row ml-7">
        <img src={logo} className="h-10 md:h-20" />
        <h1 className="self-center font-medium  text-white text-smmd:ml-4  md:text-lg">
          Home
        </h1>
        <div className="h-0 w-0 self-center ml-2 bg-slate-800 md:h-6 md:w-96 "></div>
      </div>

      <div className="flex flex-row mr-7 ">
        <input
          type="text"
          placeholder="search"
          className="h-4 w-32  text-white outline outline-2 self-center bg-black outline-slate-700  md:h-6 md:w-48 md:mt-0 "
          onChange={(e) => setSearch(e.target.value)}
        />

        <img src={user} className="h-5  ml-10 self-center rounded-sm md:h-7 " />
      </div>
    </div>
  );
}

export default Navbar;
