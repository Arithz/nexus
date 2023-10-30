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
      className="fixed z-30 hidden w-full h-full min-h-screen min-w-screen bg-[#00000055] backdrop-blur-[1px]"
      id="newpostwindow"
    >
      <div
        className="flex flex-col gap-4 items-center justify-center w-full h-full text-center "
        id="newpostwindowcontent"
      >
        <div className="w-full max-w-2xl shadow-lg bg-cs-white rounded">
          <div className="px-4 py-2 md:py-3">
            {/* Content */}
            <SearchBar />
          </div>
        </div>
        <div className="w-full max-w-2xl shadow-lg rounded bg-cs-white py-2">
          <p className="text-center text-xs text-cs-fade3">Click user to open chat</p>

          <div className="h-fit max-h-[60vh] overflow-y-scroll">
            <p className="text-left text-cs-fade2 text-sm px-global">Recent Chats</p>
            {[...Array(3)].map((_, i: number) => (
              <div
                key={i}
                className="flex items-center gap-2 py-2 px-global hover:bg-cs-border-fade transition"
              >
                <span className="bg-cs-accent text-cs-white  text-sm w-5 leading-5 rounded-[50%] text-center">
                  H
                </span>
                <p>Username</p>
              </div>
            ))}

            <div className="py-3">
              <hr />
            </div>

            <p className="text-left text-cs-fade2 text-sm px-global my-2">All members</p>
            {[...Array(10)].map((_, i: number) => (
              <div
                key={i}
                className="flex items-center gap-2 py-2 px-global hover:bg-cs-border-fade transition"
              >
                <span className="bg-cs-accent text-cs-white  text-sm w-5 leading-5 rounded-[50%] text-center">
                  H
                </span>
                <p>Username</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPostPanel;
