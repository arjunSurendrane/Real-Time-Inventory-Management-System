import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="items-center flex justify-between h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#75337d]">
        Inventory Management
      </h1>
      <div className=" hidden md:flex">
        <ul className="flex">
          <li
            className="p-4 font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            {" "}
            Logout{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
