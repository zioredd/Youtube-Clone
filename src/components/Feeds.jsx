import React, { useEffect, useState } from "react";
import tom from "../assets/tom.png";
import { API_KEY } from "../../data";
import { Link } from "react-router-dom";
import { formatViewCount } from "../../data";

const Feeds = ({ category, results }) => {
  const [data, setData] = useState([]);
  console.log(category);

  const fetcheData = async () => {
    // const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    const videoList_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((res) => res.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetcheData();
  }, [category]);

  return (
    <>
      {data.map((item, index) => {
        return (
          <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}}`}>
            <img
              src={item.snippet.thumbnails.medium.url}
              alt=""
              className="w-full mb-2 rounded-md"
            />
            <div className="flex gap-4">
              <img
                src={item.snippet.thumbnails.medium.url}
                className="rounded-full w-[50px] h-[50px]"
              />
              <div>
                <h2 className="font-bold text-[18px] text-white">
                  {item.snippet.title}
                </h2>
                <p className="font-bold text-[14px] text-[#aaa]">
                  {item.snippet.channelTitle}
                </p>
                <p className="text-[#aaa]">
                  {formatViewCount(item.statistics.viewCount)} views &bull; 2
                  days ago
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Feeds;
