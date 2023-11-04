"use client";

import React, { useState } from "react";
import Navbar from "@components/general/Navbar";
import ChatPanel from "@components/general/ChatPanel";
import NewPostPanel from "@components/general/NewPostPanel";

function Item() {
  const [page, setPage] = useState("Marketplace");

  return (
    <>
      <Navbar />
      <ChatPanel />
      <NewPostPanel />

      <div className="flex w-full justify-center gap-8 h-full !pt-24 pb-8">
        <a
          href="/"
          className="flex items-center gap-3 cursor-pointer text-cs-fade2 hover:text-cs-fade1 transition "
        >
          <i className="fa-solid fa-arrow-left text-sm"></i>
          <p className="text-sm">Go Back To Marketplace</p>
        </a>
      </div>
    </>
  );
}

export default Item;
