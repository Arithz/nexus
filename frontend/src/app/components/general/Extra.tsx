"use client";

import React from "react";
import Banner from "./Banner";

function Extra() {
  const ComunityInfo = {
    title: "Comunity Info",
    name: "comunity name",
    description: "lorem ipsum at mein now rou yi helps geyouns kalknklknl",
    extra: "10k followers",
    button: {
      text: "Follow Now",
      style:
        "border-cs-fade3 hover:bg-cs-fade1 transition hover:text-cs-white border bg-cs-white text-cs-black rounded",
      callback: () => {
        alert("Followed");
      },
    },
  };

  const UpgradePremium = () => {
    return (
      <div className="rounded border border-cs-border-fade bg-cs-white px-4 py-3">
        <h1 className="font-medium text-cs-black">Upgrade to Premium</h1>
        <p className="text-xs mb-4 text-cs-fade1">
          Experience the best and get all the benefits by suscribing
        </p>
        <button className="bg-cs-accent hover:bg-cs-accent-hover transition text-cs-white text-center rounded w-full py-1.5 text-sm font-medium">
          Upgrade Now
        </button>
      </div>
    );
  };

  const ItemOfTheWeekInfo = {
    title: "Item of the Week",
    image: "",
    name: "Item Name",
    description: "Item Description",
    button: {
      text: "Buy Now",
      style: "bg-cs-red hover:bg-cs-red-hover text-cs-white transition rounded",
      callback: () => {
        alert("Item bought");
      },
    },
  };

  return (
    <>
      <UpgradePremium />
      <Banner {...ComunityInfo} />
      <Banner {...ItemOfTheWeekInfo} />
    </>
  );
}

export default Extra;
