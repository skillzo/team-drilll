import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function SubNav() {
  return (
    <div className="flex  justify-between bg-[#2E90FA] p-4  mb-[1em] text-lg text-white  w-full ">
      <div className="w-[10%]">
        <ArrowBackIosIcon />
      </div>

      <h1 className="text-center  text-sm w-[90%]">
        A step by step guide on the successful use of Accountpal
      </h1>
    </div>
  );
}

export default SubNav;
