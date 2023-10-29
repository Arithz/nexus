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

  return (
    <div className="h-fit hidden md:block">
      <h1 className="text-cs-black tracking-widest font-bold text-sm">MENU</h1>
      <div className="flex flex-col">
        <a href="#" id="home" onClick={() => handleSetPage("home")}>
          Home
        </a>
        <a href="#" id="marketplace" onClick={() => handleSetPage("marketplace")}>
          Marketplace
        </a>
        <a href="#" id="inventory" onClick={() => handleSetPage("inventory")}>
          Inventory
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
