import { useState } from "react";

function Deal() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="container mx-auto px-20">
      <div className="grid grid-cols-5 gap-4 ">
        <div className=" relative z-10 h-52 bg-[#F7F7F7] ">
          <div
            onMouseLeave={() => setSidebar(false)}
            onMouseEnter={() => setSidebar(true)}
            className=""
          >
            <img
              className="  hover:scale-100  transition-all duration-200  "
              src="https://i.postimg.cc/RZ2PYZyH/45-1.jpg"
              alt=""
            />
            <div
              className={`absolute ${
                sidebar
                  ? "right-4 transition-all duration-200"
                  : "-right-0 opacity-0  transition-all duration-200"
              } flex flex-col top-10 gap-4 justify-center`}
            >
              <div className="px-1 py-1 bg-red-400">a</div>
              <div className="px-1 py-1 bg-red-400">a</div>
              <div className="px-1 py-1 bg-red-400">a</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deal;
