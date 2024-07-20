import React, { useEffect, useState } from "react";
import Feed from "./Feed";
import Post from "./Post";

const MainSide = () => {
  const [headerData, setHeaderData] = useState([]);
  const[tweets,setTweets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://sandbox.nextleap.app/page/fetch");
        const data = await res.json();
        setHeaderData(data.headerData.navigationTabs);
        console.log(data.headerData.navigationTabs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const addTweet = (newTweet) =>{
    setTweets([newTweet, ...tweets])
  }
  return (
    <div className="border w-min border-x-gray-800 border-y-black">
      {headerData.length > 0 && (
        <div>
          <div className="flex relative">
            <div className="absolute w-16 h-1 rounded-full bg-blue-500 bottom-0 left-[18%] z-10"></div>
            <div className="w-1/2 flex justify-center font-bold text-base cursor-pointer pt-4 pb-4 hover:bg-neutral-800 hover:transition">
              {headerData[0].buttonText}
            </div>
            <div className="w-1/2 flex justify-center font-bold text-base cursor-pointer pt-4 pb-4 hover:bg-neutral-800 hover:transition">
              {headerData[1].buttonText}
            </div>
            <div className="flex flex-col justify-center">
              <span class="mx-2 material-symbols-outlined">settings</span>
            </div>
          </div>
          <div className="w-full bg-gray-700 h-[1px]"></div>
        </div>
      )}
      {/* feed component */}
      <Post addTweet={addTweet} />
      <Feed tweets={tweets} />
    </div>
  );
};

export default MainSide;
