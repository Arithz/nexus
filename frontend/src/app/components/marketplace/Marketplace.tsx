import React from "react";

const TopicBar = () => {
  const topics = [
    "Web Development",
    "Mobile Development",
    "Game Development",
    "Machine Learning",
    "Data Science",
    "Cyber Security",
    "UI/UX Design",
    "Digital Marketing",
    "Business",
    "Finance",
  ];

  return (
    <div className="px-6 ">
      <p className="text-sm font-medium text-cs-fade2">Popular Topics</p>
      <div className="grid grid-cols-5 gap-2 border-b border-cs-border-fade pb-6 pt-3">
        {topics.map((_, i: number) => (
          <p key={i} className="text-xs border border-cs-fade3 py-1 px-3 text-center">
            {topics[i]}
          </p>
        ))}
      </div>
    </div>
  );
};

const ItemList = () => {
  return (
    <>
      <div className="grid">
        {[...Array(10)].map((_, i: number) => (
          <a
            href="/item/1"
            key={i}
            className="flex gap-5 px-6 py-4 w-full border-b border-cs-border-fade hover:bg-[#eeeeee] cursor-pointer transition"
          >
            <div className="w-60 border border-cs-fade2 bg-cs-fade3 aspect-video overflow-hidden">
              <img
                src="https://placehold.co/600x400"
                alt="item"
                width="100%"
                height="100%"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm md:text-base font-bold text-cs-fade1">
                The popular complete javascript bootcamp for beginner
              </p>
              <p className="hidden md:block text-xs md:text-sm text-cs-fade2">
                This courses is a good start for those who are new to JavaScript and want to learn
                about this programming language
              </p>
              <div className="flex gap-2 items-center text-sm">
                <p>4.8</p>
                <i className="fa-solid fa-star text-yellow-300"></i>

                <p className="text-sm text-cs-fade1">12.9k students</p>
              </div>
              <p className="text-sm text-cs-fade2">5h 45m</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

function Marketplace() {
  return (
    <>
      <h1 className="text-cs-black tracking-widest font-bold text-sm px-4 py-2.5">MARKETPLACE</h1>
      <div className="h-fit w-full pt-3 mb-5 bg-cs-white border border-cs-border-fade rounded">
        <TopicBar />
        <ItemList />
      </div>
    </>
  );
}

export default Marketplace;
