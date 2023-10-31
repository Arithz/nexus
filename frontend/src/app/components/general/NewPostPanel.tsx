function NewPostPanel(props: any) {
  function CancelCallback(callback: Function | null) {
    if (callback) callback();
    closePopup();
  }

  function closePopup() {
    const popup = document.querySelector("#newpostwindow");
    popup?.classList.add("hidden");
  }

  const SearchBar = () => {
    return (
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
          className="block w-full py-1 pl-10 text-sm text-gray-900 ring-0 outline-none  focus:ring-blue-500 focus:border-blue-500  "
          placeholder="Search Mockups, Logos..."
          required
        />
        <div
          className="p-1 cursor-pointer flex items-center absolute right-0 bottom-[-0rem] opacity-30 transition hover:opacity-100"
          onClick={closePopup}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    );
  };

  return (
    <div
      className="fixed z-30 hidden w-full h-full min-h-screen min-w-screen bg-[#00000018]  backdrop-blur-[1px]"
      id="newpostwindow"
    >
      <div
        className="flex flex-col gap-4 items-center justify-center w-full h-full text-center "
        id="newpostwindowcontent"
      >
        <div className="w-full max-w-2xl shadow-lg bg-cs-white rounded-lg">
          <div className="px-6 py-4">
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
          <div className="flex justify-between items-center px-6 py-4 md:py-3">
            <i className="fa-solid fa-file text-cs-fade3 hover:text-cs-fade2 transition cursor-pointer"></i>
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
