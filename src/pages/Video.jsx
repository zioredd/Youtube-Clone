import React from "react";
import PlayVideo from "../components/PlayVideo";
import Recommended from "../components/Recommended";
import { useParams } from "react-router-dom";

const Video = () => {
  const { videoId, categoryId } = useParams();
  console.log(videoId);
  console.log(categoryId);
  return (
    <>
      <div className="flex">
        <div className="lg:w-[65vw] mx-auto">
          <PlayVideo videoId={videoId.slice(0, -1)} />
        </div>
        <div className="hidden lg:flex lg:w-[35vw] mx-auto">
          <Recommended categoryId={categoryId} />
        </div>
      </div>
    </>
  );
};

export default Video;
