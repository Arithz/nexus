import React from "react";

const LeftSide = () => {
  return (
    <div className="max-w-[15rem] w-full  sm:hidden md:block mx-global !mr-0">
      {/* logo */}
      <a href="https://flowbite.com/" className="flex items-center">
        <img src="images/logo.svg" alt="Logo" className="w-12 h-12" />
      </a>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="w-full max-w-[50rem] items-center md:order-1 mx-auto" id="navbar-sticky">
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
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
            type="search"
            id="default-search"
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <div className="flex items-center absolute right-2.5 bottom-[0.5rem] opacity-50">
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              Ctrl
            </kbd>
            +
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              K
            </kbd>
          </div>
        </div>
      </form>
    </div>
  );
};

const RightSide = () => {
  return (
    <div className="flex w-full max-w-[22rem] md:order-2 md:justify-end  mx-global !ml-0">
      <div className="w-full flex items-center gap-4 justify-end">
        <img src="images/message.svg" alt="messages" className="w-6 h-6" />
        <img src="images/notification.svg" alt="notifications" className="w-6 h-6" />
        <div className="flex items-center gap-2">
          <span className="font-bold text-cs-white bg-cs-accent px-2.5 py-1 rounded-full">H</span>
          <p>harithzfathi</p>
          <button className="" aria-label="down-arrow">
            <i className="fa-solid fa-chevron-down text-fade-global"></i>
          </button>
        </div>
      </div>

      {/* small viewport hamburger menu */}
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
  );
};

export default function Navbar() {
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen flex items-center gap-6 justify-between py-2">
          <LeftSide />
          <RightSide />
          <SearchBar />
        </div>
      </nav>
    </>
  );
}