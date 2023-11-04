import React from "react";

const TopicBar = () => {
  return (
    <>
      <p className="text-sm font-medium text-cs-fade2">Popular Topics</p>
      <div className="grid grid-cols-5 gap-2 border-b border-cs-border-fade pb-6 pt-3">
        {[...Array(10)].map((_, i: number) => (
          <p key={i} className="border border-cs-fade3 py-1 px-3 text-center">
            Item {i}
          </p>
        ))}
      </div>
    </>
  );
};

const ItemList = () => {
  return (
    <>
      <div className="grid gap-2">
        {[...Array(10)].map((_, i: number) => (
          <div key={i} className="flex gap-5 py-4 w-full border-b border-cs-border-fade">
            <div className="w-[25rem] bg-cs-fade3 aspect-video overflow-hidden">
              <img
                src="https://i.imgur.com/2ZJXJ8k.png"
                alt="item"
                width="100%"
                height="100%"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-cs-fade1">
                The popular complete javascript bootcamp for beginner
              </p>
              <p className="text-sm text-cs-fade2">
                This courses is a good start for those who are new to JavaScript and want to learn
                about this programming language
              </p>
              <div className="flex gap-2 text-sm">
                <p>4.8</p>
                <i className="fa-solid fa-star text-yellow-300"></i>
              </div>
              <p className="text-sm text-cs-fade2">5h 45m</p>
              <p className="text-sm text-cs-fade1">12.9k students</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

function Inventory() {
  return (
    <>
      <h1 className="text-cs-black tracking-widest font-bold text-sm px-4 py-2.5">MENU</h1>
      <div className="h-full w-full px-6 py-3 bg-cs-white border border-cs-border-fade rounded">
        {/* <TopicBar /> */}
        <ItemList />
      </div>
    </>
  );
}

export default Inventory;
