import React from "react";
import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";
import Extra from "@components/Extra";

function Main() {
  return (
    <>
      <Navbar />
      <div className="flex w-full gap-6 h-full !pt-24 pb-8">
        <div className="fixed w-full">
          <Sidebar />
          {/* <Extra /> */}
        </div>
        {/* placeholder block */}
        <div className="max-w-[10rem] w-full hidden md:block "></div>

        <div className="flex justify-center gap-6 w-full">
          {/* <Posts /> */}
          <div className="flex z-10 md:w-full max-w-[50rem] ">
            <div className="  w-full">
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

          {/* Banners */}
          <div className="h-fit space-y-4 w-full max-w-[25rem] hidden lg:block">
            <Extra />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
