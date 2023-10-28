import React from "react";
import Banner from "./Banner";

function Extra() {
  const ComunityInfo = {
    title: "Comunity Info",
    name: "Comunity Name",
    description: "lorem ipsum at mein now rou yi helps geyouns kalknklknl",
    extra: "10k followers",
    button: () => {
      return <button>Follow Now</button>;
    },
    buttonstyle: "border-cs-black border bg-cs-white text-cs-black rounded",
  };

  const UpgradePremium = () => {
    return (
      <div className="rounded  border-cs-black bg-cs-white px-4 py-2">
        <h1 className="font-medium">Upgrade to Premium</h1>
        <p>Experience the best and get all the benefits by suscribing</p>
        <button className="bg-cs-accent text-cs-white text-center rounded w-full py-1">
          Upgrade Now
        </button>
      </div>
    );
  };

  const ItemOfTheWeekInfo = {
    title: "Item of the Week",
    image: "https://picsum.photos/200",
    name: "Item Name",
    description: "Item Description",
    button: () => {
      return <button>Buy Now</button>;
    },
    buttonstyle: "bg-cs-red text-cs-white rounded",
  };

  return (
    <div className="sticky top-24 h-fit space-y-4">
      <Banner {...ComunityInfo} />
      <UpgradePremium />
      <Banner {...ItemOfTheWeekInfo} />
    </div>
  );
}

export default Extra;
