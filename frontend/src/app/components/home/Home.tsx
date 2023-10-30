import React from "react";
import Post from "@components/home/Post";
import { openNewPostWindow } from "@utils/utils";

function Home() {
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between w-full">
        <div className="flex w-fit items-center gap-2 border border-cs-fade2 text-sm py-1 px-3 text-cs-fade1 rounded cursor-pointer hover:bg-cs-white2 transition">
          <p>Hot</p>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        <button
          className="bg-cs-accent rounded py-1 px-3 text-cs-white text-sm hover:bg-cs-accent-hover transition"
          onClick={openNewPostWindow}
          type="button"
        >
          + Create new post
        </button>
      </div>

      {[...Array(20)].map((_, i: number) => (
        <div key={i}>
          <Post />
        </div>
      ))}
    </div>
  );
}

export default Home;
