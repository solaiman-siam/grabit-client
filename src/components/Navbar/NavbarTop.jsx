import { FaWhatsapp } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router-dom";

function NavbarTop() {
  return (
    <div className="bg-[#F8F8FB]">
      <div className=" p-2 flex container mx-auto px-20 justify-between items-center text-gray-500">
        <div className="flex items-center gap-4 text-[13px] ">
          <div className="flex items-center gap-1 ">
            <LuPhoneCall size={17} color="#6b7280" />
            <span>+91 987 654 3210</span>
          </div>
          <div className="flex items-center gap-1">
            <FaWhatsapp size={18} color="#6b7280" />
            <span>+91 987 654 3210</span>
          </div>
        </div>
        <div>
          <p className="text-[13px] ">
            World's Fastest Online Shopping Destination
          </p>
        </div>
        <div className="flex gap-4 items-center text-[13px] ">
          <Link>Help?</Link>
          <Link>Track Order?</Link>
          <div className="hs-dropdown relative inline-flex">
            <button
              id="hs-dropdown-default"
              type="button"
              className="hs-dropdown-toggle text-gray-500 text-[13px] transition-all hover:text-[#5CAF90] py-1  inline-flex items-center gap-x-2 text-sm    hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              English
              <svg
                className="hs-dropdown-open:rotate-180  size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 z-10 opacity-0 hidden w-[130px] bg-white shadow-md  p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
              aria-labelledby="hs-dropdown-default"
            >
              <Link className="flex  transition-all hover:text-[#5CAF90] items-center gap-x-3.5 py-2 px-3  text-xs text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                English
              </Link>
              <Link className="flex  hover:text-[#5CAF90]  items-center gap-x-3.5 py-2 px-3  text-xs text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                Itialiano
              </Link>
            </div>
          </div>
          <div className="hs-dropdown relative inline-flex">
            <button
              id="hs-dropdown-default"
              type="button"
              className="hs-dropdown-toggle text-[13px] text-gray-500 py-1  inline-flex items-center gap-x-2 text-sm  hover:text-[#5CAF90]    hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              Doller
              <svg
                className="hs-dropdown-open:rotate-180 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 z-10 opacity-0 hidden w-[130px] bg-white shadow-md  p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
              aria-labelledby="hs-dropdown-default"
            >
              <Link className="flex  transition-all hover:text-[#5CAF90] items-center gap-x-3.5 py-2 px-3  text-xs text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                USD $
              </Link>
              <Link className="flex  hover:text-[#5CAF90]  items-center gap-x-3.5 py-2 px-3  text-xs text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                EURO €
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarTop;
