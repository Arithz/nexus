"use client";

import React, { useState } from "react";
import Navbar from "@components/general/Navbar";
import Sidebar from "@components/general/Sidebar";
import Extra from "@components/general/Extra";
import Post from "@components/home/Post";
import ChatPanel from "@components/general/ChatPanel";
import { openPopup } from "@utils/utils";

function Main() {
  const [page, setPage] = useState("Home");

  function handleSetPage(page: string) {
    setPage(page);
  }

  return (
    <>
      <Navbar />
      <ChatPanel />

      <div className="flex w-full gap-6 h-full !pt-24 pb-8">
        <div className="fixed w-full max-w-[15rem] hidden md:block">
          <Sidebar page={page} handleSetPage={handleSetPage} />

          <button onClick={openPopup}>Open</button>
          {/* <Extra /> */}
        </div>
        {/* placeholder block */}
        <div className="max-w-[15rem] w-full hidden md:block"></div>

        <div className="flex justify-center gap-6 w-full">
          {/* <Posts /> */}
          <div className="flex z-10 md:w-full max-w-[50rem] ">
            <div className="w-full">
              {[...Array(20)].map((_, i: number) => (
                <div key={i}>
                  <Post />
                </div>
              ))}
            </div>
          </div>

          {/* Banners */}
          <div className="h-fit space-y-4 w-full max-w-[22rem] hidden lg:block">
            <Extra />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
