import React from "react";
import Sidebar from "./Sidebar";

const Bell = () => {
  return (
    <div className="flex-1 bg-[#252836] h-screen pt-10">
      <div>
        <Sidebar />
      </div>
      <div className="md:ml-32 px-2">
        <div className="font-barlow">
          <p className="text-gray-400 font-medium">
            Currently Unavailable... 🙁
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bell;
