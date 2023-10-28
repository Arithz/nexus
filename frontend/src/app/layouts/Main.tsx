import React from "react";
import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";
import Extra from "@components/Extra";

function Main() {
  return (
    <>
      <Navbar />
      <div className="flex w-full h-full !pt-24 pb-8">
        <div className="fixed w-full px -global ">
          <Sidebar />
          {/* <Extra /> */}
        </div>

        <div className="w-[20%] hidden md:block bg-gray-400"></div>

        {/* <Posts /> */}
        <div className="flex z-10 md:w-full max-w-[50rem] mx-auto">
          <div className=" bg-gray-300 w-full">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="bg-white p-4 mb-4">
                <h1 className="text-2xl font-bold">Post {i}</h1>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block w-[20%] bg-gray-300">
          <Extra />
        </div>
      </div>
    </>
  );
}

export default Main;
