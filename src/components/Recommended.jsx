import React, { useEffect, useState } from "react";
import thumbnail1 from "../assets/thumbnail1.png";
import { API_KEY } from "../../data";
import { formatViewCount } from "../../data";
import moment from "moment";
import { Link } from "react-router-dom";
import moreIcon from "../assets/more.png";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  console.log(categoryId);

  const fetchApiData = async () => {
    const related_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(related_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <>
      <div className="space-y-4 mx-4">
        {apiData.map((item, i) => {
          return (
            <Link
              to={`/video/${item.snippet.categoryId}/${item.id}%7D`}
              key={i}
              className="flex space-x-2"
            >
              <img
                src={item.snippet.thumbnails.medium.url}
                alt=""
                className="w-[150px] h-auto rounded-lg"
                onClick={() => {}}
              />
              <div>
                <div className="flex justify-between">
                  <h1 className="text-[15px] text-white">
                    {item.snippet.title}
                  </h1>
                  <img src={moreIcon} className="h-[24px]" />
                </div>
                <p className="text-[14px] text-[#aaa]">
                  {item.snippet.channelTitle}
                </p>
                <p className="text-[14px] text-[#aaa]">
                  {formatViewCount(item.statistics.viewCount)} views &bull;{" "}
                  {moment(item.statistics.publishedAt).fromNow()}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Recommended;
