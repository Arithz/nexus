"use client";
import React, { useEffect } from "react";

interface SidebarProps {
  page: string;
  handleSetPage: (page: string) => void;
}

function Sidebar({ page, handleSetPage }: SidebarProps) {
  useEffect(() => {
    const element = document.getElementById(page);
    if (element) {
      element.classList.add("text-cs-accent");
      element.classList.add("font-bold");
    }
    return () => {
      const element = document.getElementById(page);
      if (element) {
        element.classList.remove("text-cs-accent");
        element.classList.remove("font-bold");
      }
    };
  }, [page]);

  return (
    <div className="h-fit hidden md:block">
      <h1 className="text-cs-black tracking-widest font-bold text-sm">MENU</h1>
      <div>
        <a href="#" id="home" className="block" onClick={() => handleSetPage("home")}>
          Home
        </a>
        <a href="#" id="marketplace" className="block" onClick={() => handleSetPage("marketplace")}>
          Marketplace
        </a>
        <a href="#" id="inventory" className="block" onClick={() => handleSetPage("inventory")}>
          Inventory
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
