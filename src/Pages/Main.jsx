import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/Navbar/SideBar";
import SubNav from "../Components/SubNav/SubNav";
import Wrapper from "../Components/UI/Wrapper/Wrapper";

function Main() {
  return (
    <>
      <SubNav />
      <Wrapper>
        <div className="flex">
          <SideBar />
          <div className="md:w-[60%] md:ml-[4em]">
            <Outlet />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Main;
