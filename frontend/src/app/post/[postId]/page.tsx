"use client";

import React, { useState } from "react";
import Navbar from "@components/general/Navbar";
import ChatPanel from "@components/general/ChatPanel";
import NewPostPanel from "@components/general/NewPostPanel";
import Banner from "@components/general/Banner";

const User = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="text-xs text-cs-white bg-cs-accent rounded-[50%] w-6 leading-6 text-center">
        A
      </div>
      <div className="text-sm flex gap-2 text-cs-fade2">
        <p>Ammar Adnan</p>•<p>1h ago</p>
      </div>
    </div>
  );
};

const PostDetails = () => {
  return (
    <div className="py-2">
      <h1 className="text-cs-black font-bold text-lg">API Key in Github</h1>
      <div className="flex flex-col gap-2 text-cs-fade2 text-sm mt-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate, quibusdam,
          officia, doloremque voluptatum quia deserunt molestiae rem quos dolorum voluptatibus eius.
          Quisquam voluptate, quibusdam, officia, doloremque voluptatum quia deserunt molestiae rem
          quos dolorum voluptatibus eius.
        </p>
      </div>
    </div>
  );
};

const PostActions = () => {
  return (
    <div className="flex gap-4">
      <button aria-label="1" className="flex items-center gap-2 text-cs-fade2">
        <i className="fa-solid fa-arrow-up text-cs-fade2" aria-hidden="true" />
        <p>1</p>
      </button>
      <button aria-label="1" className="flex items-center gap-2 text-cs-fade2">
        <i className="fa-solid fa-comment text-cs-fade2" aria-hidden="true" />
        <p>1</p>
      </button>
      <button aria-label="options" className="flex items-center gap-2 text-cs-fade2">
        <i className="fa-solid fa-ellipsis-h text-cs-fade2" aria-hidden="true" />
      </button>
    </div>
  );
};

const ComunityInfo = {
  title: "Comunity Info",
  name: "comunity name",
  description: "lorem ipsum at mein now rou yi helps geyouns kalknklknl",
  extra: "10k followers",
  button: {
    text: "Follow Now",
    style:
      "border-cs-fade3 hover:bg-cs-fade1 transition hover:text-cs-white border bg-cs-white text-cs-black rounded",
    callback: () => {
      alert("Followed");
    },
  },
};

const CommentInput = () => {
  return (
    <div className="w-full my-4 border border-cs-border-fade bg-cs-white rounded-lg">
      <div className="px-4 md:px-6 py-4">
        <div className="space-y-1 pt-1">
          <textarea
            className="w-full h-full border-none text-sm outline-none text-cs-fade1"
            placeholder="Write your comments"
            rows={3}
          ></textarea>
        </div>
      </div>
      <span className="block w-full h-[0.5px] bg-cs-border-fade"></span>
      <div className="flex justify-between items-center px-4 py-2">
        <i
          title="Upload file"
          className="fa-solid fa-file text-cs-fade3 hover:text-cs-fade2 transition cursor-pointer"
        ></i>
        <button
          type="button"
          className="bg-cs-accent px-2 text-sm py-1 text-cs-white hover:bg-cs-accent-hover transition rounded"
        >
          Comment
        </button>
      </div>
    </div>
  );
};

const Comment = () => {
  return (
    <>
      <User />
      <PostDetails />
      <PostActions />
    </>
  );
};

function Post({ params }: any) {
  return (
    <>
      <Navbar />
      <ChatPanel />
      <NewPostPanel />

      <div className="min-h-screen h-full w-full pb-20 px-4">
        {/* go back */}
        <div className="flex justify-center gap-8 !pt-24 pb-1">
          <a
            href="/"
            className="flex text-xs items-center gap-3 cursor-pointer text-cs-white transition rounded-full px-3 py-1.5 border border-cs-border-fade bg-cs-fade2 hover:bg-cs-fade3 mb-4"
          >
            <i className="fa-solid fa-arrow-left text-sm"></i>
            <p>Go Back To Home</p>
          </a>
        </div>
        {/* content */}
        <div className="w-full relative h-full flex gap-3 justify-center">
          <div className="w-full max-w-3xl bg-cs-white py-6 px-8 rounded border border-cs-border-fade">
            <div>
              <User />
              <PostDetails />
              <PostActions />
            </div>
            <CommentInput />
            <span className="block w-full h-[0.5px] bg-cs-border-fade my-6"></span>
            <div className="flex flex-col gap-8">
              {[...Array(5)].map((_, i: number) => (
                <div key={i}>
                  <Comment />
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-y-auto pb-5 space-y-3 w-full md:max-w-[16rem] xl:max-w-[20rem] hidden lg:block ">
            <Banner {...ComunityInfo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
