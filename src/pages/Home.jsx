import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import homeIcon from "../assets/homepage.png";
import game from "../assets/game-controller.png";
import music from "../assets/musical-note.png";
import { useParams } from "react-router-dom";

const Home = ({ category, setCategory }) => {
  return (
    <>
      <div className="flex">
        {/* <Sidebar category={category} setCategory={setCategory} /> */}
        <div className=" hidden md:flex flex-col pl-2">
          <div
            className="flex flex-col items-center p-4 hover:bg-[#3d3d3d] hover:rounded-lg"
            onClick={() => setCategory(0)}
          >
            <img src={homeIcon} alt="" className="w-[20px] h-[auto]" />
            <p className="text-[13px]">Home</p>
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
        </div>

        <Main category={category} />
      </div>
    </>
  );
};

export default Home;
