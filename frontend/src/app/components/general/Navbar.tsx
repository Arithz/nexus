import React from "react";
import { openChatWindow } from "@utils/utils";

const LeftSide = () => {
  return (
    <div className="max-w-[12rem] w-full  sm:hidden md:block mx-global !mr-0">
      {/* logo */}
      <a href="/" className="flex items-center">
        <img src="/images/logo.svg" alt="Logo" className="w-12 h-12" />
      </a>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="md:w-full max-w-4xl items-center md:order-1" id="navbar-sticky">
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
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <div className="flex items-center absolute right-2.5 bottom-[0.25rem] opacity-30">
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
    <div className="flex w-full md:max-w-[16rem] xl:max-w-[20rem] md:order-2 md:justify-end  mx-global !ml-0">
      <div className="w-full flex items-center gap-4 justify-end">
        {/* message */}
        <img
          src="/images/message.svg"
          alt="messages"
          className="w-6 h-6 hover:bg-cs-border-fade transition cursor-pointer"
          onClick={openChatWindow}
        />
        {/* notifications */}
        <img
          src="/images/notification.svg"
          alt="notifications"
          className="w-6 h-6 hover:bg-cs-border-fade transition cursor-pointer"
        />
        <div className="flex items-center gap-2">
          <span className="font-bold text-cs-white bg-cs-accent w-6 leading-6 tex-sm text-center rounded-[50%] ">
            H
          </span>
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
      <nav className="bg-cs-white fixed w-full z-20 top-0 left-0 border-b border-gray-300">
        <div className="flex items-center justify-center gap-5 xl:gap-8 py-2">
          <LeftSide />
          <RightSide />
          <SearchBar />
        </div>
      </nav>
    </>
  );
}
