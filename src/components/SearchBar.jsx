import React, { useEffect, useState } from "react";
import searchIcon from "../assets/search.png";
import { API_KEY, formatViewCount } from "../../data";
import axios from "axios";
import Main from "./Main";
import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <>
      <div className="relative w-[50vw]">
        <input
          type="text"
          placeholder="Search"
          className="py-2 pr-10 pl-4 block w-full rounded-full bg-[#0f0f0f] border border-[#242424] focus:outline-none focus:ring-[0.5px] focus:ring-blue-500"
        />
        <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">
          <img src={searchIcon} alt="" />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
