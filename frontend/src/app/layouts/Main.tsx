"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@components/general/Navbar";
import Sidebar from "@components/general/Sidebar";
import Extra from "@components/general/Extra";
import ChatPanel from "@components/general/ChatPanel";
import Home from "@components/home/Home";
import Marketplace from "@components/marketplace/Marketplace";
import Inventory from "@components/inventory/Inventory";
import NewPostPanel from "@components/general/NewPostPanel";
import Filter from "@components/general/Filter";

function Main() {
  const [page, setPage] = useState("");
  const [pageFilter, setPageFilter] = useState("Inventory");

  function handleSetPage(page: string) {
    setPage(page);
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = urlParams.get("page");
    const pageAvailable = ["Home", "Marketplace", "Inventory"];
    if (pageParam && pageAvailable.includes(pageParam)) handleSetPage(pageParam);
    else handleSetPage("Home");
  }, []);

  return (
    <>
      <Navbar />
      <ChatPanel />
      <NewPostPanel />

      <div className="flex w-full justify-center gap-5 xl:gap-8 h-full !pt-24 pb-8">
        <div className="w-full max-w-[12rem] hidden md:block">
          <Sidebar page={page} handleSetPage={handleSetPage} />
        </div>

        <div className="flex justify-center gap-5 xl:gap-8">
          {/* Main Content */}
          <div className="z-10 md:w-full max-w-4xl ">
            {!page && (
              <div className="w-full min-w-[30rem] max-w-[56rem] shimmer h-full px-6 py-3 mb-4 border mt-[2.4rem]  rounded block  border-cs-border-fade"></div>
            )}
            {page === "Home" && <Home />}
            {page === "Marketplace" && <Marketplace />}
            {page === "Inventory" && <Inventory />}
          </div>

          {/* Banners */}
          <div className="sticky overflow-y-auto top-12 h-[90vh] pb-5 space-y-4 w-full md:max-w-[16rem] xl:max-w-[20rem] hidden lg:block pt-[2.4rem]">
            <Extra />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
