import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function SideBar() {
  return (
    <div className="side-bar hidden md:flex w-[25%]">
      <ul className="space-y-[1em] font-bold">
        <Link to="/">
          <li>Introduction</li>
        </Link>
        <Link to="/guide">
          <li>How to use Accountpal</li>
        </Link>
        <Link to="/features">
          <li>Key Features</li>
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
