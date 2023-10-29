function ChatPanel(props: any) {
  function CancelCallback(callback: Function | null) {
    if (callback) callback();
    closePopup();
  }

  function closePopup() {
    const popup = document.querySelector("#popup");
    popup?.classList.add("hidden");
  }

  return (
    <div
      className="fixed z-30 hidden w-full h-full min-h-screen min-w-screen bg-cs-black3/60 backdrop-blur-sm globalPadding2"
      id="popup"
    >
      <div className="flex flex-col items-center justify-center w-full h-full text-center ">
        <div className="w-full max-w-2xl rounded-tr-md bg-cs-white2 " id="popupcontent">
          <div className="px-4 py-2 md:py-3">
            {/* Title */}
            <div>
              Meow
              <div className="flex items-center gap-[0.3rem] py-2">
                <div className="flex items-center w-full">
                  <span className=" w-[0.35rem] h-[0.35rem] border rounded-full bg-cs-border"></span>
                  <span className="w-full h-[1px] bg-cs-border opacity-60"></span>
                  <span className=" w-[0.35rem] h-[0.35rem] border rounded-full bg-cs-border"></span>
                  <span className=" w-[0.4rem] h-[0.4rem] border rounded-full bg-cs-border"></span>
                </div>

                <span className="p-[0.15rem] border rounded-full border-cs-border"></span>

                <div className="flex items-center w-full">
                  <span className=" w-[0.4rem] h-[0.4rem] border rounded-full bg-cs-border"></span>
                  <span className=" w-[0.35rem] h-[0.35rem] border rounded-full bg-cs-border"></span>

                  <span className="w-full h-[1px] bg-cs-border opacity-60"></span>
                  <span className=" w-[0.35rem] h-[0.35rem] border rounded-full bg-cs-border"></span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-3 py-4 md:px-6 md:py-5">
              {/* <input
                  type="text"
                  className="w-full px-4 py-1 text-sm md:text-base border-[1.7px] rounded-full bg-cs-white4 border-cs-border font-bold"
                  placeholder="Input your name..."
                ></input> */}
              meow
            </div>
          </div>

          {/* Footer */}
          <div className="text-xs md:text-sm py-1 font-bold bg-[#B4B4B4] ">
            {/* <p>You may edit your name after entering the room</p> */}
            meow
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 md:gap-6 bg-[#262626] py-3">
            <button className="relative p-1 transition rounded-full shadow-md h-fit bg-cs-white3 hover:bg-cs-white hover:shadow-cs-white/50 group">
              <div className="relative">
                <div className="bg-cs-white2 group-hover:bg-cs-white group-hover:shadow-cs-white/50 absolute p-0.5 left-[20%] transition top-[-2.5px] flex justify-center">
                  <span className="w-[3px] h-[3px] bg-cs-border rounded-full"></span>
                </div>

                <div
                  className="text-cs-black2 font-bold text-sm md:text-base py-0.5 w-[25vw] md:w-[13rem] rounded-full border border-cs-border"
                  onClick={() => CancelCallback(props.cancel)}
                >
                  Cancel
                </div>
              </div>
            </button>
            <button className="relative p-1 transition rounded-full shadow-md h-fit bg-cs-white3 hover:bg-cs-white hover:shadow-cs-white/50 group">
              <div className="relative">
                <div className="bg-cs-white3 group-hover:bg-cs-white group-hover:shadow-cs-white/50 absolute p-0.5 left-[20%] transition top-[-2.5px] flex justify-center">
                  <span className="w-[3px] h-[3px] bg-cs-border rounded-full"></span>
                </div>

                <div
                  className="text-cs-black2 font-bold text-sm md:text-base py-0.5 w-[25vw] md:w-[13rem] rounded-full border border-cs-border"
                  id="confirm"
                  onClick={props.callback}
                >
                  Confirm
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPanel;
