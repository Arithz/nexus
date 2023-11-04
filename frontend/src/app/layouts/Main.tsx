"use client";

import React, { useState } from "react";
import Navbar from "@components/general/Navbar";
import Sidebar from "@components/general/Sidebar";
import Extra from "@components/general/Extra";
import ChatPanel from "@components/general/ChatPanel";
import Home from "@components/home/Home";
import Marketplace from "@components/marketplace/Marketplace";
import Inventory from "@components/inventory/Inventory";
import NewPostPanel from "@components/general/NewPostPanel";

function Main() {
  const [page, setPage] = useState("Home");

  function handleSetPage(page: string) {
    setPage(page);
  }

  return (
    <>
      <Navbar />
      <ChatPanel />
      <NewPostPanel />

      <div className="flex w-full justify-center gap-8 h-full !pt-24 pb-8">
        <div className="w-full max-w-[12rem] hidden md:block">
          <Sidebar page={page} handleSetPage={handleSetPage} />
        </div>

        {/* placeholder block */}
        {/* <div className="max-w-[12rem] w-full hidden md:block"></div> */}

        <div className="flex justify-center gap-8">
          {/* Main Content */}
          <div className="z-10 md:w-full max-w-4xl ">
            {page === "Home" && <Home />}
            {page === "Marketplace" && <Marketplace />}
            {page === "Inventory" && <Inventory />}
          </div>

          {/* Banners */}
          <div className="sticky overflow-y-auto top-12 h-[90vh] pb-5 space-y-4 w-full max-w-[20rem] hidden lg:block pt-[2.4rem]">
            <Extra />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
