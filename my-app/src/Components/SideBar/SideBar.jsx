import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { useGlobalContext } from "../../Context/provider";

const SideBar = () => {
  const { userName, isLogin } = useGlobalContext();
  const [fillStar, setFillStar] = useState({
    firstStar: false,
    secondStar: false,
  });

  return (
    <>
      <div className="w-[20vw] h-[94vh] flex flex-col gap-3 items-end border-r-2 border-slate-100 mobileSideBar ">
        <div className=" w-[80%] mt-[4vh] flex flex-col justify-center text-lg gap-2">
          <Link to="/">
            <li className="list-none rounded flex items-center w-[95%] h-[6vh] hover:bg-slate-100 hover:text-Signin sideBarMenuItems">
              <i className="fa-solid fa-house ml-[15px]"></i>
              <span className="ml-[15px] mobileSideBarItems">Overview</span>
            </li>
          </Link>
          {isLogin && (
            <>
              <Link to="/task">
                <li className="list-none rounded flex items-center w-[95%] h-[6vh] hover:bg-slate-100 hover:text-Signin sideBarMenuItems">
                  <i className="fa-solid fa-file ml-[19px]"></i>
                  <span className="ml-[15px] mobileSideBarItems">Task</span>
                </li>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SideBar;
