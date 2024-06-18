import { GrLocation } from "react-icons/gr";
import { PiSquaresFour } from "react-icons/pi";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function NavbarBottom() {
  return (
    <div className="container w-full mx-auto px-20 mt-1">
      <div className="flex justify-between w-full items-center">
        <div className="hs-dropdown relative inline-flex">
          <button
            id="hs-dropdown-default"
            type="button"
            className="hs-dropdown-toggle text-white  font-medium px-3 py-3 text-[15px] transition-all  bg-[#5CAF90]   inline-flex items-center gap-x-2    disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
          >
            <PiSquaresFour size={26} />
            <span>All Categories</span>
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
            className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden w-[330px] bg-white shadow-md  p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
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
        <div>
          <div>
            <div className="relative w-96 border">
              <input
                type="text"
                id="hs-validation-name-success"
                name="hs-validation-name-success"
                className="py-3 px-4 focus:outline-none  block  border-teal-500 w-full text-sm  dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400"
                required=""
                placeholder="Search products..."
                aria-describedby="hs-validation-name-success-helper"
              />
              <button className="absolute cursor-pointer text-gray-400 inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                <RiSearchLine size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="hs-dropdown relative inline-flex">
          <button
            id="hs-dropdown-default"
            type="button"
            className="hs-dropdown-toggle text-white  font-medium px-3 py-3 text-[15px] transition-all  bg-[#5CAF90]   inline-flex items-center gap-x-2    disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
          >
            <GrLocation size={22} />
            <span>New York</span>
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
            className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden w-[330px] bg-white shadow-md  p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
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
      </div>
    </div>
  );
}

export default NavbarBottom;
