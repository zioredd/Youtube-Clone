import React, { useEffect, useState } from "react";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import { API_KEY } from "../../data";
import moment from "moment";
import { formatViewCount } from "../../data";
import Paragraph from "./Paragraph";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  let { videoId } = useParams();
  videoId = videoId.slice(0, -1);
  console.log(videoId);

  const fetchVideoData = async () => {
    const videoApi_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoApi_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    const channelApi_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelApi_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    const commentApi_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(commentApi_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <>
      <div className=" p-6 pt-0">
        <iframe
          className="w-full h-[65vh] rounded-2xl"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

        <h1 className="text-[1.5em] mt-3">
          {apiData ? apiData.snippet.title : "No-Title"}
        </h1>
        <div className="flex justify-between mt-4">
          <div className="flex space-x-4">
            <img
              src={
                channelData ? channelData.snippet.thumbnails.default.url : ""
              }
              alt=""
              className="rounded-full w-[50px] h-[50px]"
            />
            <div>
              <h3>{apiData ? apiData.snippet.channelTitle : ""}</h3>
              <p>
                {channelData
                  ? formatViewCount(channelData.statistics.subscriberCount)
                  : ""}
                <span className="ml-1">Subscibers</span>
              </p>
            </div>
            <button className="px-6 py-3 font-bold text-[14px] rounded-full bg-white text-black">
              Subscribe
            </button>
          </div>

          <div className="flex space-x-3 text-white">
            <button className="hidden md:flex bg-[#464646] px-4 py-3 rounded-full space-x-2">
              <img src={like} alt="" className="w-[24px] h-[px]" />{" "}
              <span>
                {apiData ? formatViewCount(apiData.statistics.likeCount) : ""} |{" "}
              </span>
              <img src={dislike} alt="" className="w-[24px] h-[px]" />
            </button>
            <button className="hidden md:flex bg-[#464646] px-6 py-3 rounded-full space-x-2">
              <img src={share} alt="" className="w-[24px] h-[px]" />{" "}
              <span>Share</span>
            </button>
          </div>
        </div>
        <div className="bg-[#272727] rounded-xl mt-4 p-2 text-white p-3">
          <p className="text-white">
            {apiData ? formatViewCount(apiData.statistics.viewCount) : "No"}{" "}
            views &bull;
            {moment(apiData ? apiData.statistics.publishedAt : "").fromNow()}
          </p>
          <p>
            {apiData ? (
              <Paragraph text={apiData.snippet.description} limit={150} />
            ) : (
              ""
            )}
          </p>
        </div>

        <div>
          <h4 className="text-[1.4em] font-[600] mt-4">
            {apiData ? formatViewCount(apiData.statistics.commentCount) : ""}
            Comments
          </h4>

          <div className="space-y-6 mt-4">
            {commentData.map((item, index) => {
              return (
                <div className="flex space-x-3 key={index}">
                  <img
                    className="rounded-full w-[50px] h-[50px]"
                    src={
                      commentData
                        ? item.snippet.topLevelComment.snippet
                            .authorProfileImageUrl
                        : ""
                    }
                    alt="profile picture"
                  />

                  <div>
                    <h3 className="text-[14px]">
                      {commentData
                        ? item.snippet.topLevelComment.snippet.authorDisplayName
                        : ""}{" "}
                      &bull;{" "}
                      <span className="text-[#aaa]">
                        {commentData
                          ? moment(
                              item.snippet.topLevelComment.snippet.publishedAt
                            ).fromNow()
                          : ""}
                      </span>
                    </h3>
                    <p className="">
                      {commentData ? (
                        <Paragraph
                          text={
                            item.snippet.topLevelComment.snippet.textDisplay
                          }
                          limit={250}
                        />
                      ) : (
                        ""
                      )}
                    </p>
                    <div className="flex space-x-2 mt-3">
                      <img src={like} className="w-[24px] h-[24px]" />{" "}
                      <span>
                        {commentData
                          ? item.snippet.topLevelComment.snippet.likeCount
                          : ""}
                      </span>
                      <img src={dislike} className="w-[24px] h-[24px]" />
                      <p className="ml-10">Reply</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayVideo;
