import React from "react";

const FilterBar = () => {
  return (
    <div className="md:w-full max-w-4xl items-center md:order-1" id="navbar-sticky">
      <form>
        <label
          htmlFor="default-Filter"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Filter
        </label>
        <div className="relative mx-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="Filter"
            id="default-Filter"
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Filter"
            required
          />
        </div>
      </form>
    </div>
  );
};

function Filter() {
  return (
    <>
      <div className="mt-8">
        <div className="text-cs-black tracking-widest font-bold text-sm px-4 py-2.5">FILTER</div>
        <FilterBar />
      </div>
    </>
  );
}


export default Filter;
