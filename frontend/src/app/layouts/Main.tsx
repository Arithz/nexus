"use client";

import React, { useState } from "react";
import Navbar from "@components/general/Navbar";
import Sidebar from "@components/general/Sidebar";
import Extra from "@components/general/Extra";
import ChatPanel from "@components/general/ChatPanel";
import Home from "@components/home/Home";
import Marketplace from "@components/marketplace/Marketplace";
import Inventory from "@components/inventory/Inventory";

function Main() {
  const [page, setPage] = useState("Home");

  function handleSetPage(page: string) {
    setPage(page);
  }

  return (
    <>
      <Navbar />
      <ChatPanel/>

      <div className="flex w-full gap-4 h-full !pt-24 pb-8">
        <div className="fixed w-full max-w-[12rem] hidden md:block">
          <Sidebar page={page} handleSetPage={handleSetPage} />
        </div>

        {/* placeholder block */}
        <div className="max-w-[12rem] w-full hidden md:block"></div>

        <div className="flex justify-center gap-4 w-full">
          {/* Main Content */}
          <div className="z-10 md:w-full max-w-[50rem] ">
            {page === "Home" && <Home />}
            {page === "Marketplace" && <Marketplace />}
            {page === "Inventory" && <Inventory/>}
          </div>

          {/* Banners */}
          <div className="h-fit space-y-4 w-full max-w-[20rem] hidden lg:block">
            <div className ="h-5"></div>
            <Extra />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
