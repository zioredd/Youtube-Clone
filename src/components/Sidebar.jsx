import React from "react";
import home from "../assets/home.png";
import game from "../assets/game_icon.png";
import automobile from "../assets/automobiles.png";
import sport from "../assets/sports.png";
import entertainment from "../assets/entertainment.png";
import technology from "../assets/tech.png";
import music from "../assets/home.png";
import blog from "../assets/blogs.png";
import news from "../assets/news.png";
import jack from "../assets/jack.png";
import tom from "../assets/tom.png";
import simon from "../assets/simon.png";
import megan from "../assets/megan.png";
import gerard from "../assets/gerard.png";
import homeIcon from "../assets/homepage.png";

const Sidebar = ({ setCategory, isOpen, setIsOpen }) => {
  return (
    <>
      <div className="">
        <div
          className="flex p-4 mx-[1em] hover:bg-[#3d3d3d] gap-6 hover:rounded-lg"
          onClick={() => {
            setCategory(0);
            setIsOpen(!isOpen);
          }}
        >
          <img className="w-[24px] h-[24px]" src={homeIcon} alt="" />
          <p>Home</p>
        </div>
        <div
          className="flex p-4 mx-[1em] hover:bg-[#3d3d3d] gap-6 hover:rounded-lg"
          onClick={() => {
            setCategory(20);
            setIsOpen(!isOpen);
          }}
        >
          <img className="w-[24px] h-[24px]" src={game} alt="" />
          <p>Gaming</p>
        </div>
        <div
          className="flex p-4 mx-[1em] hover:bg-[#3d3d3d] gap-6 hover:rounded-lg"
          onClick={() => {
            setCategory(2);
            setIsOpen(!isOpen);
          }}
        >
          <img className="w-[24px] h-[24px]" src={automobile} alt="" />
          <p>Automobiles</p>
        </div>
        <div
          className="flex p-4 mx-[1em] hover:bg-[#3d3d3d] gap-6 hover:rounded-lg"
          onClick={() => {
            setCategory(17);
            setIsOpen(!isOpen);
          }}
        >
          <img className="w-[24px] h-[24px]" src={sport} alt="" />
          <p>Sports</p>
        </div>
        <div
          className="flex p-4 mx-[1em] hover:bg-[#3d3d3d] gap-6 hover:rounded-lg"
          onClick={() => {
            setCategory(24);
            setIsOpen(!isOpen);
          }}
        >
          <img className="w-[24px] h-[24px]" src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div
          className="flex p-4 mx-[1em] hover:bg-[#3d3d3d] gap-6 hover:rounded-lg"
          onClick={() => {
            setCategory(28);
            setIsOpen(!isOpen);
          }}
        >
          <img className="w-[24px] h-[24px]" src={technology} alt="" />
          <p>Technology</p>
        </div>
        <div
          className="flex p-4 mx-[1em] hover:bg-[#3d3d3d] gap-6 hover:rounded-lg"
          onClick={() => {
            setCategory(10);
            setIsOpen(!isOpen);
          }}
        >
          <img className="w-[24px] h-[24px]" src={music} alt="" />
          <p>Music</p>
        </div>
        <div
          className="flex p-4 mx-[1em] hover:bg-[#3d3d3d] gap-6 hover:rounded-lg"
          onClick={() => {
            setCategory(22);
            setIsOpen(!isOpen);
          }}
        >
          <img className="w-[24px] h-[24px]" src={blog} alt="" />
          <p>Blogs</p>
        </div>
        <div
          className="flex p-4 mx-[1em] hover:bg-[#3d3d3d] gap-6 hover:rounded-lg"
          onClick={() => {
            setCategory(25);
            setIsOpen(!isOpen);
          }}
        >
          <img className="w-[24px] h-[24px]" src={news} alt="" />
          <p>News</p>
        </div>
      </div>
      <hr />
      {/* <div className="space-y-3">
        <p className="font-bold">Subscribed</p>
        <div className="flex space-x-6">
          <img src={jack} alt="" className="rounded-full w-[24px] h-[24px]" />
          <p>PewDiePie</p>
        </div>
        <div className="flex space-x-6">
          <img src={simon} alt="" className="rounded-full w-[24px] h-[24px]" />
          <p>Simon</p>
        </div>
        <div className="flex space-x-6">
          <img src={megan} alt="" className="rounded-full w-[24px] h-[24px]" />
          <p>Megan</p>
        </div>
        <div className="flex space-x-6">
          <img src={tom} alt="" className="rounded-full w-[24px] h-[24px]" />
          <p>Tom</p>
        </div>
        <div className="flex space-x-6">
          <img src={gerard} alt="" className="rounded-full w-[24px] h-[24px]" />
          <p>Gerard</p>
        </div>
      </div> */}

      {/* <div className="flex flex-col pl-2 ">
        <div
          className="flex p-4 mx-[1em] hover:bg-[#3d3d3d] gap-6 hover:rounded-lg"
          onClick={() => setCategory(0)}
        >
          <img src={homeIcon} alt="" className="w-[20px] h-[auto]" />
          <p className="text-[18px] font-bold">Home</p>
        </div>
        <div
          className="flex flex-col items-center p-4 hover:bg-[#3d3d3d] hover:rounded-lg"
          onClick={() => setCategory(20)}
        >
          <img src={game} alt="" className="w-[20px] h-[auto]" />
          <p className="text-[13px]">Game</p>
        </div>
        <div
          className="flex flex-col items-center p-4 hover:bg-[#3d3d3d] hover:rounded-lg"
          onClick={() => setCategory(10)}
        >
          <img src={music} alt="" className="w-[20px] h-[auto]" />
          <p className="text-[13px]">Music</p>
        </div>
      </div> */}
    </>
  );
};

export default Sidebar;
