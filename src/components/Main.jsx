import React from "react";
import Feeds from "./Feeds";

const Main = ({ category, results }) => {
  return (
    <div className="max-w-[90%] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 space-y-3 ">
      <Feeds category={category} results={results} />
    </div>
  );
};

export default Main;
