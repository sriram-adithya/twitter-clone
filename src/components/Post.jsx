import React, { useState } from "react";

const Post = ({ addTweet }) => {
  const [tweet, setTweet] = useState("");

  const handlePost = () => {
    if (tweet.trim()) {
      addTweet({ text: tweet, id: Date.now() });
    //   console.log({ text: tweet, id: Date.now() });
      setTweet("");
    }
  };
  return (
    <div className="border-b border-neutral-800">
      <div className="flex gap-4 w-full">
        <div className="my-4 ml-2">
          <img
            className="rounded-full w-[40px] h-[40px]"
            src="https://pbs.twimg.com/profile_images/1728446011553775616/gxdOZPo6_normal.jpg"
            alt="profile"
          />
        </div>
        <div className="w-full">
          <input
            onChange={(e) => setTweet(e.target.value)}
            value={tweet}
            className="w-full text-lg bg-black text-white h-7 my-2 outline-none"
            type="text"
            placeholder="What is happening?!"
          />
          <div className="text-blue-500 flex items-center gap-1 w-full my-4">
            <span class="material-symbols-outlined">globe</span>
            <span className="text-base">Everyone can reply</span>
          </div>
          <div className="w-[90%] h-[0.2px] bg-gray-700 my-4"></div>
          <div className="flex gap-2 pb-2 text-blue-500 w-full">
            <span class="material-symbols-outlined cursor-pointer hover:rounded-full">
              image
            </span>
            <span class="material-symbols-outlined cursor-pointer hover:rounded-full">
              gif
            </span>
            <span class="material-symbols-outlined cursor-pointer hover:rounded-full">
              ballot
            </span>
            <span class="material-symbols-outlined cursor-pointer hover:rounded-full">
              mood
            </span>
            <span class="material-symbols-outlined cursor-pointer hover:rounded-full">
              calendar_month
            </span>
            <span class="material-symbols-outlined cursor-pointer hover:rounded-full">
              location_on
            </span>
            <div class="cursor-pointer bg-blue-500 hover:bg-blue-400 rounded-full ml-52 flex justify-center items-center">
              <button onClick={handlePost} className="px-5 py-2 text-white">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
