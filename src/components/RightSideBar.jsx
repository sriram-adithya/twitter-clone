import React, { useEffect, useState } from "react";

const RightSideBar = () => {
  const [trendingData, settrendingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from your API link
        const response = await fetch("https://sandbox.nextleap.app/page/fetch");
        const data = await response.json();
        settrendingData(data.trendingData.trends);
      } catch (error) {
        console.error("Error fetching Twitter data:", error);
      }
    };

    fetchData();
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num;
  };

  return (
    <div className="w-full hidden md:block  whitespace-nowrap">
      <div className="m-3">
        <input
          type="text"
          placeholder="Search Twitter"
          className="w-1/2 rounded-full bg-neutral-900 text-white px-4 py-2"
        />
      </div>
      {trendingData.length > 0 && (
        <div className="m-3 bg-neutral-900 xl:w-1/2 md:w-auto rounded-xl pt-4 pb-2 space-y-2 sticky top-0">
          <h1 className="text-xl font-bold p-2">What's happening</h1>
          <div className=" p-2 hover:bg-neutral-800 cursor-pointer hover:transition hover:duration-700 hover:ease-in-out">
            <p className="font-bold text-neutral-600 text-xs">
              Trending in {trendingData[0].country}
            </p>
            <p className="font-bold">{trendingData[0].text}</p>
            <p className="font-bold text-xs text-neutral-600">
              {formatNumber(trendingData[0].tweets)} Tweets
            </p>
          </div>

          <div className="p-2 hover:bg-neutral-800 cursor-pointer hover:transition hover:duration-700 hover:ease-in-out">
            <p className="font-bold text-neutral-600 text-xs">
              {trendingData[1].category} · Trending
            </p>
            <p className="font-bold">{trendingData[1].text}</p>
            <p className="font-bold text-xs text-neutral-600">
              Trending with{" "}
              <span className="text-blue-500">
                {trendingData[1].hashTags[0]} {trendingData[1].hashTags[1]}
              </span>
            </p>
          </div>

          <div className="p-2 hover:bg-neutral-800 cursor-pointer hover:transition hover:duration-700 hover:ease-in-out">
            <p className="font-bold text-neutral-600 text-xs">
              {trendingData[2].category} · Trending
            </p>
            <p className="font-bold">{trendingData[2].text}</p>
            <p className="font-bold text-xs text-neutral-600">
              {formatNumber(trendingData[2].tweets)} Tweets
            </p>
          </div>

          <div className="p-2 hover:bg-neutral-800 cursor-pointer hover:transition hover:duration-700 hover:ease-in-out">
            <p className="font-bold text-neutral-600 text-xs">
              {trendingData[3].category} · Trending
            </p>
            <p className="font-bold">{trendingData[3].text}</p>
            <p className="font-bold text-xs text-neutral-600">
              Trending with{" "}
              <span className="text-blue-500">
                {trendingData[3].hashTags[0]} {trendingData[3].hashTags[1]}
              </span>
            </p>
          </div>

          <div className="p-2 hover:bg-neutral-800 cursor-pointer hover:transition hover:duration-700 hover:ease-in-out">
            <p className="font-bold text-base text-blue-500">Show more</p>
          </div>
        </div>
      )}
      <div className="m-3 sticky top-[50vh] bg-neutral-900 xl:w-1/2 2xl:w-1/2 sm:w-auto rounded-xl pt-4 pb-2">
        <h1 className="text-xl font-bold p-2">Who to follow</h1>
        <div className=" p-2 space-y-4">
          {/* 1st- follow */}
          <div className="flex justify-between hover:bg-neutral-800 hover:rounded-lg">
            <button className="flex justify-center">
              <a href="https://x.com/vercel">
                <img
                  width={40}
                  height={40}
                  className="rounded-full"
                  src="https://pbs.twimg.com/profile_images/1767351110228918272/3Pndc5OT_normal.png"
                  alt="Vercel"
                />
              </a>
              <div className="pl-2 flex flex-col justify-center items-center">
              <p className="font-bold cursor-pointer text-base">
                Vercel<p className="text-sm text-gray-700">@Vercel</p>
              </p>
              </div>

            </button>
            <div className="flex justify-center items-center">
            <button className="bg-white rounded-full hover:bg-slate-200 w-20 h-9 text-black pt-1 font-bold">
              Follow
            </button>
            </div>

          </div>
          {/* 2nd Follow  */}
          <div className="flex justify-between hover:bg-neutral-800 w-auto hover:rounded-lg">
            <button className="flex">
              <a href="https://x.com/reactjs">
                <img
                  width={40}
                  height={40}
                  className="rounded-full"
                  src="https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_normal.png"
                  alt="React"
                />
              </a>
              <div className="pl-2">
              <p className="font-bold cursor-pointer text-base">
                React<p className="text-sm text-gray-700">@reactjs</p>
              </p>
              </div>

            </button>
            <div className="flex justify-center items-center">
            <button className="bg-white rounded-full w-20 h-9 hover:bg-slate-200 text-black font-bold ">
              Follow
            </button>
            </div>

          </div>

          {/* 3rd follow */}
          <div className="flex justify-between hover:bg-neutral-800 w-auto hover:rounded-lg">
            <button className="flex">
              <a href="https://x.com/java">
                <img
                  width={40}
                  height={40}
                  className="rounded-full"
                  src="https://pbs.twimg.com/profile_images/1410016948977422337/rKU8iR89_normal.png"
                  alt="Java"
                />
              </a>
              <div className="pl-2">
              <p className="font-bold cursor-pointer text-base">
                Java<p className="text-sm text-gray-700">@java</p>
              </p>
              </div>
            </button>
            <div className="flex justify-center items-center">
            <button className="bg-white rounded-full w-20 h-9 hover:bg-slate-200 text-black font-bold">
              Follow
            </button>
            </div>

          </div>
          <div className="w-full hover:bg-neutral-800 cursor-pointer hover:transition hover:rounded-lg hover:duration-700 hover:ease-in-out">
          <p className="font-bold text-base  text-blue-500 ">
            Show more
          </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
