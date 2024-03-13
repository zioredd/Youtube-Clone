import React, { useEffect, useState } from "react";
import menu_icon from "../assets/menu.png";
import logo from "../assets/youtube.png";
import search from "../assets/search.png";
import upload from "../assets/upload.png";
import more_icon from "../assets/more.png";
import notification from "../assets/notification.png";
import profile_icon from "../assets/jack.png";
import { useNavigate } from "react-router-dom";
import yt from "../assets/yt.png";
import hamburger from "../assets/hamburgerW.png";
import SearchBar from "./SearchBar";
import Explore from "./Explore";
import Sidebar from "./Sidebar";

const Navbar = ({ category, setCategory }) => {
  const history = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
      document.body.classList.add("bg-black");
    } else {
      document.body.classList.remove("overflow-y-hidden");
      document.body.classList.remove("bg-black");
    }
  }, [isOpen]);

  return (
    <>
      <nav className="flex justify-between p-6">
        {/* <div className="flex space-x-6">
          <img
            className="w-[20px] h-[20px] "
            src={hamburger}
            onClick={toggleMenu}
          />
          <div className="flex">
            <img className="h-[26px]" src={logo} onClick={() => history("/")} />
            <img src={yt} className="h-[24px]" onClick={() => history("/")} />
          </div>
        </div> */}
        <div className="flex space-x-4 items-center">
          <img
            className="w-[1.2em] h-[1.2em] "
            src={hamburger}
            onClick={toggleMenu}
          />
          <div className="flex ">
            <img className="h-[26px]" src={logo} onClick={() => history("/")} />
            <img src={yt} className="h-[1.2em]" onClick={() => history("/")} />
          </div>
        </div>

        {isOpen && (
          <div className=" absolute left-0 top-0  w-[15rem] h-[100vh] shadow-lg bg-[#0f0f0f] ring-1 ring-black ring-opacity-5 animate-fade-in ">
            <div className="flex justify-between p-6">
              <div className="flex space-x-6">
                <img
                  className="w-[24px] h-[24px] "
                  src={hamburger}
                  onClick={toggleMenu}
                />
                <div className="flex">
                  <img
                    className="h-[26px]"
                    src={logo}
                    onClick={() => history("/")}
                  />
                  <img
                    src={yt}
                    className="h-[24px]"
                    onClick={() => history("/")}
                  />
                </div>
              </div>
            </div>
            <Sidebar
              setCategory={setCategory}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </div>
        )}

        <div className="">
          <div className="flex">
            <SearchBar />
          </div>
        </div>

        <div className="hidden md:flex space-x-6">
          <img className="w-[24px] h-[24px]" src={upload} alt="" />
          <img className="w-[24px] h-[24px]" src={more_icon} alt="" />
          <img className="w-[24px] h-[24px]" src={notification} alt="" />
          <img
            className="w-[30px] h-[30px] rounded-full"
            src={profile_icon}
            alt=""
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
