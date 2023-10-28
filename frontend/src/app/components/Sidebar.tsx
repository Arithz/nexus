import React from "react";

function Sidebar() {
  return (
    <div className="h-fit hidden md:block">
      <h1 className="text-cs-black tracking-widest font-bold">MENU</h1>
      <div>
        <a href="#" className="block" aria-current="page">
          Home
        </a>
        <a href="#" className="block">
          Marketplace
        </a>
        <a href="#" className="block">
          Inventory
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
