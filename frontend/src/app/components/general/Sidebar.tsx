"use client";
import React, { useEffect } from "react";

interface SidebarProps {
  page: string;
  handleSetPage: (page: string) => void;
}

function Sidebar({ page, handleSetPage }: SidebarProps) {
  const updateElementStyles = () => {
    const element = document.getElementById(page);
    if (element) {
      element.classList.add("text-cs-accent", "font-bold");
    }
    return () => {
      if (element) {
        element.classList.remove("text-cs-accent", "font-bold");
      }
    };
  };

  useEffect(updateElementStyles, [page]);
  useEffect(updateElementStyles, []); // Run once when component mounts

  const pages = ["Home", "Marketplace", "Inventory"];

  const icons = {
    Home: "home",
    Marketplace: "shop",
    Inventory: "briefcase",
  };

  return (
    <>
      <h1 className="text-cs-black tracking-widest font-bold text-sm px-4 py-2.5">MENU</h1>
      <div className="flex flex-col gap-1">
        {pages.map((thispage) => (
          <button
            key={thispage}
            id={thispage}
            onClick={() => handleSetPage(thispage)}
            className={`${
              thispage === page && "bg-cs-black !text-cs-white"
            } flex items-center gap-4 py-1.5 px-4 text-sm font-medium text-cs-fade1 hover:text-cs-accent transition`}
          >
            <i className={`fa-solid fa-${icons[thispage as keyof typeof icons]}`}></i>
            <p>{thispage}</p>
          </button>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
