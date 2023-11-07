"use client";

import React, { useState } from "react";
import Navbar from "@components/general/Navbar";
import ChatPanel from "@components/general/ChatPanel";
import NewPostPanel from "@components/general/NewPostPanel";

const BuyPanel = () => {
  return (
    <div className="fixed bottom-0 z-10 bg-cs-white flex w-full  gap-2 px-4 py-2">
      <div className="w-full max-w-3xl mx-auto flex">
        <h1 className="flex flex-col pr-3">
          <span className="font-bold text-cs-black text-sm">Price:</span>
          <span className="font-bold text-cs-red text-base">RM200.66</span>
        </h1>
        <button className="w-full bg-cs-accent text-cs-white2 py-2 rounded hover:bg-cs-accent-hover transition font-medium">
          Buy Now
        </button>
      </div>
    </div>
  );
};

function Item({ params }: any) {
  return (
    <>
      <Navbar />
      <ChatPanel />
      <NewPostPanel />
      <BuyPanel />

      <div className="min-h-screen h-full w-full pb-20 px-4">
        {/* go back */}
        <div className="flex justify-center gap-8 !pt-24 pb-1">
          <a
            href="/?page=Marketplace"
            className="flex text-xs items-center gap-3 cursor-pointer text-cs-white transition rounded-full px-3 py-1.5 border border-cs-border-fade bg-cs-fade2 hover:bg-cs-fade3 mb-4"
          >
            <i className="fa-solid fa-arrow-left text-sm"></i>
            <p>Go Back To Marketplace</p>
          </a>
        </div>
        {/* content */}
        <div className="w-full max-w-3xl mx-auto space-y-7 ">
          {/* title */}
          <h1 className="font-bold text-2xl text-center">
            The popular complete javascript bootcamp for beginner
          </h1>

          <div className="aspect-video rounded w-full mx-auto bg-gray-200">
            <img
              src="https://i.imgur.com/2ZJXJ8k.png"
              alt="item"
              width="100%"
              height="100%"
              className="w-full h-full object-cover object-center rounded"
            />
          </div>

          <div className="flex flex-wrap gap-5 items-center justify-center">
            <div className="flex gap-4 border-r-[1px] px-2">
              <div className="w-10 h-10 rounded bg-cs-accent overflow-hidden"></div>
              <div>
                <p className="font-bold text-sm">Ammar Adnan</p>
                <p className="text-sm">Software Developer</p>
              </div>
            </div>
            <div className="flex gap-2 justify-center items-center px-2">
              <p>4.8</p>
              <i className="fa-solid fa-star text-yellow-300"></i>
              <p>(24 reviews)</p>
            </div>

            <div className="flex gap-2 items-center px-2">
              <i className="fa-solid fa-video text-cs-accent"></i>
              <p>40 videos</p>
            </div>

            <div className="flex gap-2 items-center px-2">
              <i className="fa-solid fa-user text-cs-accent"></i>
              <p>345 student</p>
            </div>
          </div>

          {/* learning content */}
          <div className="border border-cs-border-fade px-5 py-4 bg-cs-white">
            <h1 className="font-bold text-xl pb-4">What you will learn</h1>
            <p>
              The purpose of lorem ipsum is to create a natural looking block of text (sentence,
              paragraph, page, etc.) that doesn't distract from the layout. A practice not without ,
              laying out pages with meaningless filler text can be very useful when the focus is
              meant to be on design, not content. The passage experienced a surge in popularity
              during the 1960s when Letraset used it on their dry-transfer sheets, and again during
              the 90s as desktop publishers bundled the text with their software. Today it's seen
              all around the web; on templates, websites, and stock designs. Use our to get your
              own, or read on for the authoritative history of lorem ipsum.
            </p>
          </div>

          {/* course content */}
          <div className="space-y-2">
            <h1 className="font-bold text-xl">Course Content</h1>
            <div className="flex gap-2">
              <p>23 sections</p>•<p>156 lectures</p>•<p>22h 13m total length</p>
            </div>
            <div>
              {[...Array(40)].map((_, i: number) => (
                <div
                  key={i}
                  className="flex justify-between gap-2 px-5 py-3 border border-cs-border-fade bg-cs-white"
                >
                  <p>Video {i + 1}</p>
                  <p className="text-cs-fade3">5m</p>
                </div>
              ))}
            </div>
          </div>

          {/* reviews */}
          <div className="border border-cs-border-fade bg-cs-white px-5 py-4">
            <h1 className="font-bold text-xl">Featured Reviews</h1>
            {[...Array(3)].map((_, i: number) => (
              <div key={i} className="px-2 py-3 border-b border-cs-border-fade  ">
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded bg-gray-200 overflow-hidden"></div>
                  <div>
                    <p className="font-bold">Ammar Adnan</p>
                    <div className="flex items-center space-x-1">
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
