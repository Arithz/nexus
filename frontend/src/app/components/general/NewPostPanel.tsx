"use client";

import { useEffect } from "react";

function NewPostPanel(props: any) {
  function CancelCallback(callback: Function | null) {
    if (callback) callback();
    closePopup();
  }

  function closePopup() {
    const popup = document.querySelector("#newpostwindow");
    popup?.classList.add("hidden");
  }

  //add event listener to close popup when esc is pressed
  useEffect(() => {
    function escFunction(event: any) {
      if (event.keyCode === 27) {
        closePopup();
      }
    }
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <div
      className="fixed z-30 hidden w-full h-full min-h-screen min-w-screen bg-[#00000018]  backdrop-blur-[1px] px-global"
      id="newpostwindow"
    >
      <div
        className="flex flex-col gap-4 items-center justify-center w-full h-full text-center "
        id="newpostwindowcontent"
      >
        <div className="w-full max-w-2xl mr-32 shadow-lg bg-cs-white rounded-lg">
          <div className="px-4 md:px-6 py-4">
            {/* Content */}
            <div className="w-full justify-between flex items-center">
              <div className="flex gap-3 text-xs items-center">
                <p className="text-cs-fade3">Harith Fathi {">"}</p>
                <p className="px-2 py-1 rounded border border-cs-accent text-cs-accent">
                  computerscience
                </p>
              </div>
              <button onClick={closePopup}>
                <i className="fa-solid fa-xmark text-cs-fade3 hover:text-cs-fade1 transition cursor-pointer"></i>
              </button>
            </div>

            <div className="space-y-1 pt-1">
              <input
                type="text"
                placeholder="Post Title"
                className="w-full float-left placeholder:text-cs-fade2 font-medium outline-none"
              ></input>
              <textarea
                className="w-full h-full border-none text-sm outline-none text-cs-fade1"
                placeholder="Add a description..."
                rows={3}
              ></textarea>
            </div>
          </div>
          <span className="block w-full h-[0.5px] bg-cs-border-fade"></span>
          <div className="flex justify-between items-center px-4 md:px-6 py-2 md:py-3">
            <i
              title="Upload file"
              className="fa-solid fa-file text-cs-fade3 hover:text-cs-fade2 transition cursor-pointer"
            ></i>
            <button
              type="button"
              className="bg-cs-accent px-2 text-sm py-1 text-cs-white hover:bg-cs-accent-hover transition rounded"
            >
              Create post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPostPanel;
