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
        {[...Array(5)].map((_, i: number) => (
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
              <p className="text-sm text-cs-fade2">Status : Active</p>
              <div className="flex-row h-full">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 bottom-0">
                  <div className="bg-cs-accent h-2.5 rounded-full w-[45%]"></div>
                </div>
              </div>
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
      <h1 className="text-cs-black tracking-widest font-bold text-sm px-4 py-2.5">INVENTORY</h1>
      <div className="h-full w-full px-6 py-3 bg-cs-white border border-cs-border-fade rounded">
        {/* <TopicBar /> */}

        <div className="border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="w-1/3">
              <a
                href="#"
                className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              >
                All
              </a>
            </li>
            <li className="w-1/3">
              <a
                href="#"
                className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                aria-current="page"
              >
                Progress
              </a>
            </li>
            <li className="w-1/3">
              <a
                href="#"
                className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              >
                Completed
              </a>
            </li>
          </ul>
        </div>

        <ItemList />
      </div>
    </>
  );
}

export default Inventory;
