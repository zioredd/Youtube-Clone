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

const Explore = () => {
  return (
    <>
      <div className="hidden md:block space-y-3">
        <div
          className={`flex space-x-3 ${
            category === 0 ? "border-b-[3px] p-[2px] border-red-500" : ""
          }`}
          onClick={() => setCategory(0)}
        >
          <img className="w-[24px] h-[24px]" src={homeIcon} alt="" />
          <p>Home</p>
        </div>
        <div
          className={`flex space-x-3 ${
            category === 20 ? "border-b-[3px] p-[2px] border-red-500" : ""
          }`}
          onClick={() => setCategory(20)}
        >
          <img className="w-[24px] h-[24px]" src={game} alt="" />
          <p>Gaming</p>
        </div>
        <div
          className={`flex space-x-3 ${
            category === 2 ? "border-b-[3px] p-[2px] border-red-500" : ""
          }`}
          onClick={() => setCategory(2)}
        >
          <img className="w-[24px] h-[24px]" src={automobile} alt="" />
          <p>Automobiles</p>
        </div>
        <div
          className={`flex space-x-3 ${
            category === 17 ? "border-b-[3px] p-[2px] border-red-500" : ""
          }`}
          onClick={() => setCategory(17)}
        >
          <img className="w-[24px] h-[24px]" src={sport} alt="" />
          <p>Sports</p>
        </div>
        <div
          className={`flex space-x-3 ${
            category === 24 ? "border-b-[3px] p-[2px] border-red-500" : ""
          }`}
          onClick={() => setCategory(24)}
        >
          <img className="w-[24px] h-[24px]" src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div
          className={`flex space-x-3 ${
            category === 28 ? "border-b-[3px] p-[2px] border-red-500" : ""
          }`}
          onClick={() => setCategory(28)}
        >
          <img className="w-[24px] h-[24px]" src={technology} alt="" />
          <p>Technology</p>
        </div>
        <div
          className={`flex space-x-3 ${
            category === 10 ? "border-b-[3px] p-[2px] border-red-500" : ""
          }`}
          onClick={() => setCategory(10)}
        >
          <img className="w-[24px] h-[24px]" src={music} alt="" />
          <p>Music</p>
        </div>
        <div
          className={`flex space-x-3 ${
            category === 22 ? "border-b-[3px] p-[2px] border-red-500" : ""
          }`}
          onClick={() => setCategory(22)}
        >
          <img className="w-[24px] h-[24px]" src={blog} alt="" />
          <p>Blogs</p>
        </div>
        <div
          className={`flex space-x-3 ${
            category === 25 ? "border-b-[3px] p-[2px] border-red-500" : ""
          }`}
          onClick={() => setCategory(25)}
        >
          <img className="w-[24px] h-[24px]" src={news} alt="" />
          <p>News</p>
        </div>
      </div>
      <hr />
      <div className="space-y-3">
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
      </div>
    </>
  );
};

export default Explore;
